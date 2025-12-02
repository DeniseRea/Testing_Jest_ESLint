/**
 * Servidor HTTP
 * Inicia el servidor Express en el puerto especificado
 *
 * @author Laboratorio de Programación Avanzada
 * @version 1.0.0
 */

// Importar la aplicación Express configurada
const app = require('./app');

// Definir el puerto del servidor (variable de entorno o 3000 por defecto)
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Endpoints disponibles:');
    console.log('  - GET  /users  - Obtener todos los usuarios');
    console.log('  - POST /users  - Crear un nuevo usuario');
});
