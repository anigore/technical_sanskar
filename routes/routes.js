const question = require('../controller/questions')
    , user = require('../controller/users')

module.exports.initialize = function (app) {

    app.use('/question', question);       /* question */
    app.use('/user', user);           /* user */
}