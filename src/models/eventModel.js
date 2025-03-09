const {Schema , model} = require('mongoose');
const mongoose = require('mongoose'); 

const eventSchema = new mongoose.Schema({  
    name: { 
      type: String, 
      required: true },  
    date: Date, 
    place: { 
      type: String, 
      required: true }, 
    description: String,  
    groups: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Group' }],
    participants: [{  
      type: mongoose.Schema.Types.ObjectId, 
       ref: 'User'
    }]
  });  

const Event = model('Event', eventSchema);
module.exports = Event;