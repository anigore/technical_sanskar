/**
* @description controller for user relted services
* @author Aniket Gore
* @date 27 jan, 2020
*/

const express = require('express')
    , router = express.Router()
    , joi = require('../../lib/joi')
    , user = require('../../lib/users')


router.post('*/create', (req, res) => {
    user.createUser(req.body, result => {
        res.json(result);
    })
})

module.exports = router;