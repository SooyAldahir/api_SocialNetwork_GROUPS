const { Schema, model } = require('mongoose');
const mongoose = require('mongoose'); 

const groupSchema = new mongoose.Schema({  
    name: { type: String, required: true },  
    description: String,  
    members: [{  
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  
      registerDate: { type: Date, default: Date.now }  
    }],  
    events: [{  
      event: {type: mongoose.Schema.Types.ObjectId, ref: 'Events' },  
      date: Date,  
      description: String  
    }]  
  });  

const Group = model('Group', groupSchema);
module.exports = Group;