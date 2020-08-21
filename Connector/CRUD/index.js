'use strict'
/**
 * @description generic methods for CRUD operations for all collections
 * @author Aniket Gore
 * @since August 20,2020
 * @argument required data 
 */


const mongoose = require('mongoose')
    , randomKey = require('random-key')
    , common = require('./common')

module.exports = {
    saveData: (r, cl) => {
        let responseObj = common.responseObj();
        new mongoose.models[r.collection](r.data).save((error, res) => {
            if (!error && res) {
                responseObj.status = 201
                responseObj.message = common.SAVED_SUCCESS
            } else {
                responseObj.error = error.message ? error.message : error ;
                responseObj.status = 400
            }
            return cl(responseObj);
        })
    }
}