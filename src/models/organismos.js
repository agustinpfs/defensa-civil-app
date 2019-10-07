const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganismosSchema = new Schema({
    name: String,
    type: String, //(educacion, gubernamental, fabrica, negocio, infraestructura, particular)
    riesgo: Array //ref eventos
    history: String, //ref
    adress : {
        street: String, //
        number: String,
        // coordinates: <coordinates>,
    },
    

});
module.exports = mongoose.model('organismos', OrganismosSchema);


