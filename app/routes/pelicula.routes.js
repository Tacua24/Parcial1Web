module.exports = (app) => {
  const peliculas = require("../controllers/pelicula.controller.js");
  const { verifyToken } = require("../middlewares/authJwt.js");
  var router = require("express").Router();

  router.post("/create/", [verifyToken], peliculas.create);
  router.get("/", peliculas.findAll);
  router.get("/status", peliculas.findAllStatus);
  router.get("/:id", peliculas.findOne);
  router.put("/update/:id", [verifyToken], peliculas.update);
  router.delete("/delete/:id", [verifyToken], peliculas.delete);
  router.delete("/delete/", [verifyToken], peliculas.deleteAll);

  app.use("/api/peliculas", router);
};
