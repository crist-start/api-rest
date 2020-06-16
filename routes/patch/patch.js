const express = require('express');
var router=express.Router();
const dino = require('../../collection/dinosaurios');

router.patch('/',function (req,res,next) {
  res.status(405).json({mensaje:"accion no permitida"});
});
router.patch('/:id',function (req,res,next) {
  campo={};
  campo[req.body.campo]=req.body.dato;
  dino.findOneAndUpdate({id:req.params.id},campo,{new:true},function (err,dato) {
    if(dato==null){
      res.status(404).json({mensaje:"dato no encontrado"});
    }else{
      res.status(200).json(dato);
    }
  });
});

module.exports=router;
