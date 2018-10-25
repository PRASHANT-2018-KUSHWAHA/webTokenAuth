var express = require('express');
var router = express.Router();
var User = require('../model/user');  

router.post('/register',function(req,res,next){
  var user = new user({
    email: req.body.email,
    username:req.body.username,
    password:user.hashPassword(req.body.password),
    creation_dt: Date.now()
  });

  let promise = user.save();

  promise.then(function(doc){
   return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({ message: 'error registering user.' })
  });

}) 

module.exports = router;
