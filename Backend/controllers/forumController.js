const express = require('express');
var router = express.Router();

let Forum = require('../models/forum');
let Owner = require('../models/Owner');
let Discuss = require('../models/discuss');

router.post('/create', (req,res) => {
    Forum.create({
        email: req.body.email,
        forumname: req.body.forumname,
        forumid: req.body.forumid
    },(error, data) => {
        if (error) {
            return res.json({  
                _id: error
            })
        } else {
            res.json(data);
        }
    })
})

router.get('/findbyemail/:email',(req, res) => {
    Forum.find({email:req.params.email},(err,data) => {
        if(err){
            console.log("error occuring while fetch forums");
        }
        else{
            res.json(data);
        }
    })
});

router.post('/already', (req,res) => {
    Forum.find({
        email: req.body.email,
        forumid: req.body.forumid
    },(error, data) => {
        if (error) {
            return res.json({  
                _id: error
            })
        } else {
            res.json(data);
        }
    })
})

router.get('/:id',(req,res) => {
    Forum.findOne({forumid : req.params.id},(err,data) => {
        if(err){
            console.log("error occuring while fetch forums",err);
        }
        else{
            res.send(data);
        }
    })
})

router.delete('/delete/:id',(req,res) => {
    Forum.deleteMany({forumid:req.params.id},(err,data) => { });
    Owner.deleteMany({forumid:req.params.id},(err,data) => { });
    Discuss.deleteMany({discussid:req.params.id},(err,data) => { });
})

router.post('/deletefromforum',(req,res) => {
    Forum.deleteOne({forumid:req.body.id,email:req.body.email} , (err,data) => {
        if(err){
            console.log("error while delete from forums");
        }
    })
})

module.exports = router;