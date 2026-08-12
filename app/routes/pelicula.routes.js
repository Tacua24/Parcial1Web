module.exports = (app) => {
  const peliculas = require("../controllers/pelicula.controller.js");
  var router = require("express").Router();

  // Create a new Client
  router.post("/create/", peliculas.create);
  // Retrieve all Clients
  router.get("/", peliculas.findAll);
  // Retrieve all active Clients
  router.get("/status", peliculas.findAllStatus);
  // Retrieve a single Client by id
  router.get("/:id", peliculas.findOne);
  // Update a Client by id
  router.put("/update/:id", peliculas.update);
  // Delete a Client by id
  router.delete("/delete/:id", peliculas.delete);
  // Delete all Clients
  router.delete("/delete/", peliculas.deleteAll);

  // app.use("/prefijo", router) simplifica el URI final
  // Ej. http://localhost:puerto/api/customer/
  app.use("/api/peliculas", router);
};
