const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventosSchema = new Schema({
    delimitacion: Near, 
    evento: //ref, 
    puntosRiesgo: //ref
    protocoloAplicado: String, //ref



});
module.exports = mongoose.model('eventos', EventosSchema);