/**
 * Rutas de Usuarios
 * Define los endpoints para la gestión de usuarios
 *
 * @author Laboratorio de Programación Avanzada
 * @version 1.0.0
 */

// Importar el módulo express para crear el router
const express = require('express');

// Importar las funciones del controlador de usuarios
const { getAllUsers, createUser } = require('../controllers/user.controller');

// Crear una instancia del router de Express
const router = express.Router();

/**
 * @route GET /users
 * @description Obtiene todos los usuarios almacenados
 * @access Public
 */
router.get('/', getAllUsers);

/**
 * @route POST /users
 * @description Crea un nuevo usuario
 * @access Public
 * @body {string} name - Nombre del usuario
 * @body {string} email - Correo electrónico del usuario
 */
router.post('/', createUser);

// Exportar el router para usarlo en la aplicación principal
module.exports = router;
