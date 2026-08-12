module.exports = (sequelize, Sequelize) => {
  const Pelicula = sequelize.define("pelicula", {
    nombre: {
      type: Sequelize.STRING,
    },
    sinopsis: {
      type: Sequelize.STRING,
    },
    actores: {
      type: Sequelize.STRING,
    },
    duracion: {
      type: Sequelize.FLOAT,
    },
    tipo: {
      type: Sequelize.STRING,
    },
    categoria: {
      type: Sequelize.STRING,
    },
    anioLanzamiento: {
      type: Sequelize.DATE,
    },
  });
  return Pelicula;
};
