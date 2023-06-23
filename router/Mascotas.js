const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascota");

router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    res.render("mascotas", {
      arrayMascotas: arrayMascotasDB,
      titulo: "Mascotas",
    });
  } catch (error) {
    console.log("No se pueden mostrar los datos");
  }
});

router.get("/crear", (req, res) => {
  res.render("crear");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const mascotaDB = await Mascota.findOne({ _id: id });
    console.log(mascotaDB);

    res.render("detalle", {
      mascota: mascotaDB,
      error: false,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const mascotaDB = new Mascota(body);
    await mascotaDB.save();
    res.redirect("/mascotas");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });

  try {
    if (mascotaDB) {
      res.json({
        estado: "true",
        mensaje: "eliminado",
      });
    } else {
      res.json({
        estado: "false",
        mensaje: "No se pudo eliminar",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const mascotaDB = await Mascota.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    console.log(mascotaDB);
    res.json({
      estado: true,
      mensaje: "Mascota editada",
    });
  } catch (error) {
    console.log(error);
    res.json({
      estado: falso,
      mensaje: "Mascota falla",
    });
  }
});

module.exports = router;
