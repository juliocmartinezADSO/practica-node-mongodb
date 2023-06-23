const mongoose = require("mongoose");

//Definir esquema

const Schema = mongoose.Schema;
const miSchema = new Schema({
  nombre: String,
  descripcion: String,
});

//Creamos el modelo

const Mascota = mongoose.model("Perrito", miSchema);
module.exports = Mascota;
