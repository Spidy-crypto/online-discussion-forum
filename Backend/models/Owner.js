const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let ownerSchema = Schema({  
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

module.exports = mongoose.model('Owner',ownerSchema,'Owner');
