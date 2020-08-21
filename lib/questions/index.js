/**
 * @description question related services
 * @author Aniket Gore
 * @date August 20 2020
 */
const async = require('async')
    , joi = require('../joi')
    , _ = require('lodash')
    , connector = require('../../Connector/CRUD')

module.exports = {

    /* to create new question - admin*/
    createQuestion: (data, cl) => {

        let saveReq = {
            collection: "Questions",
            aggregation: "",
            data: data
        }

        connector.saveData(saveReq, res => {
            return cl(res);
        })
    }
}