/**
 *@description question Model
 *@author Aniket gore
 *@return Object<Schema>
 */
const mongoose = require('mongoose');
// var Schema = mongoose.Schema;
let schema = mongoose.Schema({
    question_id: { type: String, required: true, unique: true },
    question_text: { type: String, required: true },
    creator: { type: String, required: true },
    created_date: { type: String, required: true },
    difficulty_level: { type: Number, required: true },
    subject_id: { type: String, required: true },
    topic_id: { type: String, required: true },
    options_id: { type: String, required: true },
    note: { type: String },
    status: { type: Number, enum: [0, 1], default: 1 },		//active or inactive
    deleted: { type: Number, enum: [0, 1], default: 0 }

})

module.exports = mongoose.model("Questions", schema, "Questions")