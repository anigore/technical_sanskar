/**
* @description controller for question relted services
* @author Aniket Gore
* @date 27 jan, 2020
*/

const express = require('express')
    , router = express.Router()
    , joi = require('../../lib/joi')
    , questions = require('../../lib/questions')


router.post('*/create', (req, res) => {
    questions.createQuestion(req.body, result => {
        res.json(result);
    })
})

module.exports = router;