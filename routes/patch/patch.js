const express = require('express');
var router=express.Router();
const dino = require('../../collection/dinosaurios');

router.patch('/',function (req,res,next) {
  res.status(405).json({mensaje:"accion no permitida"});
});
router.patch('/:id',function (req,res,next) {
  dino.findOneAndUpdate({nombre:req.params.id},{especie:req.body.especie},{new:true},function (err,dato) {
    if(dato==null){
      res.status(404).json({mensaje:"dato no encontrado"});
    }else{
      res.status(200).json(dato);
    }
  });
});

module.exports=router;
