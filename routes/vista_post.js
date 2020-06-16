const express = require('express');
var router=express.Router();


router.get('/insertar',function (req,res,next) {
res.render('formulario')
});


module.exports=router;
