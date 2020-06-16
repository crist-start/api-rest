var express = require('express');
var router = express.Router();
const Usuario = require('../../collection/dinosaurios');

router.delete('/borrar/:id', async(req, res) => { //se tiene una peticion asincrona

    await Usuario.findByIdAndDelete(req.params.id)

    res.redirect('/ver/dinosaurios');

})




module.exports = router;
