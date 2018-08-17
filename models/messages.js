const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const messageSchema = new Schema({
  
   email: {
    type: String,
    unique: true,
    match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid e-mail address"]
  },

  message: {
    type: String, 
    required: true
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const Messages = mongoose.model("messages", messageSchema);

module.exports = Messages;
