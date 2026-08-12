// app/config/auth.config.js
module.exports = {
  secret: process.env.JWT_SECRET,
  // Tiempo de vida del token: después de este tiempo, el usuario debe volver a iniciar sesión.
  // Viene de tu archivo .env (1h en nuestro ejemplo del Paso 3); ajústalo según lo sensible que sea tu aplicación.
  expiresIn: process.env.JWT_EXPIRES_IN || "1h",
};
