const express = require('express');
var router=express.Router()
const request = require('request');

router.get('/',function (req,res,next) {
  request.get('http://localhost:3000/users/dinos',function (err,response,body) {
    if (err) response.status(400).json({});
    else res.render('vista_patch',JSON.parse(body))
  });
});
module.exports=router;
