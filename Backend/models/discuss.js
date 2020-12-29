const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let discussSchema = new Schema({
    discussid:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    msg:{
        type:String
    }
})

module.exports = mongoose.model('Discuss',discussSchema,'DiscussMsg');