var express = require('express');
var router = express.Router();
const Usuario = require('../collection/dinosaurios');

router.get('/dinos', function(req, res) {


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
router.get('/dinos/rango', function(req, res) {
    let desde = req.query.desde || 0; //parametros opcionales entran en query
    desde = Number(desde);
    //si no recibe un parametro desde inicialo desde 0

    let limite = req.query.limite || 10;
    limite = Number(limite);
    //si no existe un parametro limite te arroja 10 registros

    Usuario.find({})
        .skip(desde)
        .limit(10) //establece un limite de 10 en 10 
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




router.post('/dinos', (req, res) => {

    let body = req.body;
    let usuario = new Usuario({
        id: body.id,
        nombre: body.nombre,
        especie: body.especie,
        peso: body.peso,
        tam: body.tamaño,
        esCarnivoro: body.carnivoro,
        color: body.color,
        numPatas: body.patas


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

router.delete('/', (req, res) => {
    res.status(405).json({ message: 'No se permite' })
});

router.delete('/dinos/:id', (req, res) => {
    let id = req.params.id;
    Usuario.findByIdAndRemove(id, (err, dinoBorrado) => {
        if (!dinoBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'el dinosaurio no se encontro encontrado'
                }
            })
        }
        res.json({
            ok: true,
            dino: dinoBorrado
        })
    })
})


module.exports = router;