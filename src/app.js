/**
 * Aplicación Principal - API REST para Gestión de Usuarios
 * Punto de entrada principal de la aplicación Express
 *
 * @author Laboratorio de Programación Avanzada
 * @version 1.0.0
 */

// Importar el framework Express
const express = require('express');

// Importar las rutas de usuarios
const userRoutes = require('./routes/user.routes');

// Crear una instancia de la aplicación Express
const app = express();

/**
 * Middleware para parsear JSON del cuerpo de las solicitudes
 * Permite que Express interprete automáticamente el contenido JSON
 */
app.use(express.json());

/**
 * Establecer la ruta base para los usuarios
 * Todas las rutas definidas en userRoutes estarán bajo /users
 */
app.use('/users', userRoutes);

/**
 * Ruta raíz de la API
 * Proporciona información básica sobre la API
 */
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API de Gestión de Usuarios',
        version: '1.0.0',
        endpoints: {
            users: '/users'
        }
    });
});

/**
 * Manejador de rutas no encontradas (404)
 * Captura todas las solicitudes a rutas no definidas
 */
app.use((req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        message: `La ruta ${req.method} ${req.originalUrl} no existe`
    });
});

/**
 * Manejador de errores global
 * Captura errores no manejados en la aplicación
 */
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: err.message
    });
});

// Exportar la instancia app para usarla en tests o servidor separado
module.exports = app;
