const question = require('../controller/questions')
    , user = require('../controller/users')

module.exports.initialize = function (app) {

    app.use('/que', question);       /* question */
    app.use('/usr', user);           /* user */
}