const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let forumSchema = Schema({
    email:{
        type:String
    },
    forumname:{
        type:String
    },
    forumid:{
        type : String
    }
})
    
module.exports = mongoose.model('Forum',forumSchema,'Forums');