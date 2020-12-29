const express = require('express');
var router = express.Router();

let Discuss = require('../models/discuss');

router.get('/:_id',(req, res) => {
    Discuss.find({discussid:req.params._id},(err,data) => {
        if(err){
            console.log("error occuring while fetch forums");
        }
        else{
            res.json(data);
        }
    })
});

router.post('/create', (req, res) => {
    Discuss.create({
        discussid : req.body.discussid,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        msg : req.body.msg
    },(error, data) => {
        if (error) {
            return res.json({
                _id: error
            })
        } else {
            res.json(data)
        }
    })
});

module.exports = router;