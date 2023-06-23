const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
require("dotenv").config();

const port = process.env.PORT || 3000;

const mongoose = require("./db");

//Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/", require("./router/RouterWeb"));
app.use("/mascotas", require("./router/Mascotas"));

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto ", port);
});
