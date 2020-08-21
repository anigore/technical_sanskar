/**
 *@description options Model
 *@author Aniket gore
 *@return Object<Schema>
 */
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let schema = new Schema({
    option_id: { type: String, required: true, unique: true },
    queston_id: { type: String, required: true },
    options: { type: Array, required: true },
    answer: { type: Number, required: true },	      // (index number of answer)
    status: { type: Number, enum: [0, 1], default: 1 },		 //active or inactive
    deleted:{ type: Number, enum: [0, 1], default: 0 },

})

module.exports = mongoose.model("Options", schema, "Options")