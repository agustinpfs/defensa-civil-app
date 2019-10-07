const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PuntosSchema = new Schema({
    entidad: String, //ref
    riesgo: String, //ref
    descripcion: String, //ref
    adress: {
        street: String, //
        number: String,
        // coordinates: <coordinates>,
    },


});
module.exports = mongoose.model('puntos', PuntosSchema);


