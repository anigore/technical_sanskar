'use strict'
/**
 * @description generic methods for CRUD operations
 * @author Aniket Gore
 * @since August 20,2020
 * @argument required data 
 */


const mongoose = require('mongoose')
    , randomKey = require('random-key')
    , common = require('./common')

module.exports = {

    //to create new Id for new document
    newId: (r, cl) => {
        let newId = "";
        mongoose.models[r.collection].find().sort({ _id: -1 }).limit(3).exec((error, data) => {
            if (!error && data.length > 0) {
                // sorting the data to get last id 
                data = data.sort((a, b) => {
                    return parseInt(b[r.options.key].substring(3)) - parseInt(a[r.options.key].substring(3));
                })
                newId = parseInt((data[0][r.options.key]).substring(3)) + 1;
            } else if (!error && data.length == 0) {
                newId = 1;
            } else {
                cl({ status: common.ERROR, message: common.NEWID_ERROR });
            }
            cl({ status: common.SUCCESS, id: newId });
        })
    },
    /* to save the data into db */
    saveData: (r, cl) => {
        let responseObj = common.responseObj();
        new mongoose.models[r.collection](r.data).save((error, res) => {
            if (!error && res) {
                responseObj.status = common.SUCCESS
                responseObj.message = common.SAVED_SUCCESS
            } else {
                responseObj.error = error.message ? error.message : error;
                responseObj.status = common.ERROR
            }
            return cl(responseObj);
        })
    },
}