var mongoose = require('mongoose');
var schema=mongoose.Schema;

var dinoSchema=schema(
  {
    nombre: String,
    especie:String,
    peso:Number,
    tam:Number,
    esCarnivoro:Boolean,
    color:String,
    numPatas:Number
  }
);

module.exports=mongooose.model('Dino',dinoSchema);
