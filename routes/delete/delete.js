var express = require('express');
var router = express.Router();
const Usuario = require('../../collection/dinosaurios');



router.delete('/borrar', (req, res) => {
    res.status(405).json({ message: 'No se permite' })
});
router.delete('/borrar/:id', async(req, res) => { //se tiene una peticion asincrona

    await Usuario.findByIdAndDelete(req.params.id, (err, dino) => {

        if (err) status(400).json({ mensaje: 'no se encontro el dino' });
        else res.status(200).json({
            ok: 'dinosaurio eliminado',
            dinosaurio: dino
        });

    })


})




module.exports = router;