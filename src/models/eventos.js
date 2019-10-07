const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventosSchema = new Schema({
    type: String, //(incendio, terremoto, etc)
    organismosIntervinientes: Array, //bomberos, ambulancia, policia
    protocolo: String, //ref
    


});
module.exports = mongoose.model('eventos', EventosSchema);


