/**
 * @description question related services
 * @author Aniket Gore
 * @date August 20 2020
 */
const async = require('async')
    , _ = require('lodash')
    , connector = require('../../Connector/CRUD')
    , joi = require('./validation');
const common = require('../../Connector/CRUD/common')

module.exports = {

    /* to create new question - admin*/
    createQuestion: (data, callback) => {

        /* Request object validation */
        let validateReq = (cl) => {
            let validateReq = joi.createQuestion(data);
            if (validateReq.error != null) {
                return callback({
                    status: common.FORMAT_ERROR,
                    message: "Request object format error",
                    desc: validateReq ? (validateReq.error.details[0].message || validateReq.error) : "Something went wrong!"
                });
            }
            return cl();
        }

        /* creating new id */
        let generateId = (cl) => {
            let reqBody = {
                collection: "Questions",
                options: {
                    key: "question_id"
                }
            }
            connector.newId(reqBody, (res) => {
                if (res.status == common.SUCCESS) {
                    data.question_id = "QUE" + res.id;
                    return cl();
                } else {
                    return callback("object format error");
                }
            })
        }

        /* saving new question */
        let saveReq = {
            collection: "Questions",
            aggregation: "",
            data: data
        }
        let saveDoc = (cl) => {
            connector.saveData(saveReq, res => {
                if (res.status == common.SUCCESS) {
                    return cl(res);
                } else {
                    return callback(res);
                }
            })
        }

        async.series([
            validateReq.bind(),
            generateId.bind(),
            saveDoc.bind()
        ], (resObj) => {
            return callback(resObj);
        })
    }
}