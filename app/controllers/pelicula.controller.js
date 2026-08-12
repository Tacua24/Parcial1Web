const db = require("../models");
const Pelicula = db.peliculas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validamos que el nombre no venga vacío
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const pelicula = {
    nombre: req.body.nombre,
    sinopsis: req.body.sinopsis,
    actores: req.body.actores,
    duracion: req.body.duracion,
    tipo: req.body.tipo,
    categoria: req.body.categoria,
    anioLanzamiento: req.body.anioLanzamiento,
  };

  Pelicula.create(pelicula)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the movie.",
      });
    });
};

exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

  Pelicula.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Pelicula.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving movie with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Pelicula.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Pelicula was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update movie with id=${id}. Maybe movie was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating movie with id=" + id,
      });
    });
};

// Delete a movie by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Pelicula.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "movie was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete movie with id=${id}. El pelicula no fue encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};

// Delete all movies
exports.deleteAll = (req, res) => {
  Pelicula.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} movies were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all movies.",
      });
    });
};

// Find all active movies (basado en el atributo status)
exports.findAllStatus = (req, res) => {
  Pelicula.findAll({ where: { status: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movie.",
      });
    });
};
