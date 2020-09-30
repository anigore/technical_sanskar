/**
* @description controller for question relted services
* @author Aniket Gore
* @date 27 jan, 2020
*/

const express = require('express')
    , router = express.Router()
    , questions = require('../../lib/questions')
    , common = require('../../Connector/CRUD/common')


router.post('*/create', (req, res) => {
    questions.createQuestion(req.body, result => {
        res.json(result);
    })
})

module.exports = router;