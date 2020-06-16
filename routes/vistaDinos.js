const express = require('express');
var router = express.Router()
const request = require('request');

router.get('/dinosaurios', function(req, res, next) {
    request.get('http://localhost:3000/users/dinos', function(err, response, body) {
        if (err) response.status(400).json({ mensage: 'no se encontraron dinosaurios' });
        else res.render('vistaDino', JSON.parse(body))
    });
});
module.exports = router;