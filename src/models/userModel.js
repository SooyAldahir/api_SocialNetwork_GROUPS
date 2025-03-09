const {Schema, model} = require('mongoose');
const mongoose = require('mongoose'); 

const userSchema = new Schema({
    name: {
        type: String, 
        required: true},
    email: {
        type: String, 
        required: true},
    groups: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Group'}],
    events: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event'}]
});

const User = model('User', userSchema);
module.exports = User;