const mongoose = require("mongoose");

require('dotenv').config()
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.tqjntpj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a la DB");
  })
  .catch((err) => console.log("Error en la conexion a la DB: ", err));

module.exports = mongoose;
