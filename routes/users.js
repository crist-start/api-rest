var express = require('express');
var router = express.Router();
const Usuario = require('../collection/dinosaurios');


/* GET users listing. */
router.get('/', function(req, res) {

    Usuario.find({})
        .exec((err, dinosaurios) => {

            if (err) {

                return res.status(400).json({
                    ok: false,
                    err

                })
            }
            res.json({
                ok: true,
                dinosaurios


            });

        })


});


router.post('/', (req, res) => {

    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        especie: body.especie,
        peso: body.peso,
        tamaño: body.tam,
        carnivoro: body.esCarnivoro,
        color: body.color,
        patas: body.numPatas


    });
    usuario.save((err, dinosaurioDB) => {
        if (err) {

            return res.status(400).json({
                ok: false,
                err

            })
        }



        res.json({
            ok: true,
            usuario: dinosaurioDB


        });



    })


});



module.exports = router;