const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorialSchema = new Schema({
    fecha: Date,
    estado: String,
    descripcion: String,
    capasUtilizadas:  ///ref
    victimas: {
        heridos
        ..
        ..
    },
    lugaresAfectados: {

    }





    type: String, //(incendio, terremoto, etc)
    organismosIntervinientes: Array, //bomberos, ambulancia, policia
    protocolo: String, //ref



});
module.exports = mongoose.model('historial', HistorialSchema);