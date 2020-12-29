const express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
let User = require('../models/users');

router.get('/', (req, res) => {
    User.find((err, data) => {
        if(err){
            console.log("Error While Fetching data");
        }
        else{
            req.send(data);
        }
    });
});

router.route('/login').post((req,res) => {
    User.findOne({
        email:req.body.email,
        password:req.body.password
    },(err,data) => {
        if(err){
            console.log("Error While fetching data");
        }
        else{
            res.send(data);
        }
    })
})

router.get('/find/:email', (req,res) => {
    User.findOne({email: req.params.email},(err,data) => {
        if(err){
            console.log("Error While fetch data");
        }
        else{
            res.send(data);
        }
    })
})


router.route('/mail').post((req,res) => {
    let data = req.body;
    sendmail(data);
});

async function sendmail(data) {
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: 'rajkalathiya143@gmail.com', 
        pass: '123456789R@j' 
      },
    });

    let info = await transporter.sendMail({
      from: 'rajkalathiya143@gmail.com',
      to: data.email,
      subject: 'Otp',
      html: "<p>Thanks For registering</p>"+data.otp,
    });
}


router.post('/create', (req, res) => {
    User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password
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