const app = require("./src/app/app");
const dbconnect = require("./src/database/conexion");
const port = 3000;

// Establecer conexión a la base de datos
dbconnect()
  .then(() => {
    // Iniciar el servidor Express después de conectar a la base de datos
    app.listen(port, () => {
      console.log(`Aplicacion corriendo en ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error.message);
    // Manejar el error adecuadamente, por ejemplo, cerrar la aplicación o intentar reconectar
  });
