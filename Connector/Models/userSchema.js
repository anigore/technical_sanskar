/**
 *@description User Model
 *@author Aniket gore
 *@return Object<Schema>
 */
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let schema = new Schema({
    user_id: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    phone_no: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, enum: ['M', 'F'], required: true },
    avatar: { type: String },
    status: { type: String, enum: [0, 1], default: 1 },
    deleted: { type: Number, enum: [0, 1], default: 0 },
    proficiency: [{
        subject_id: { type: String },
        proficiency_code: { type: Number } 
    }]
})

module.exports = mongoose.model("Users", schema, "Users")