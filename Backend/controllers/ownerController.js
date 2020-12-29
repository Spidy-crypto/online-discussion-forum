const express = require('express');
var router = express.Router();

let Owner = require('../models/Owner');

router.get('/', (req, res) => {
    Owner.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error found ') }
    });
});

router.post('/owner',(req,res) => {
    Owner.create({
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

module.exports = router;