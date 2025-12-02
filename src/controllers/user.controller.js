/**
 * Controlador de Usuarios
 * Maneja la lógica de negocio para la gestión de usuarios
 *
 * @author Laboratorio de Programación Avanzada
 * @version 1.0.0
 */

// Simulación de base de datos en memoria (arreglo de usuarios)
let users = [];

// Variable para generar IDs únicos
let nextId = 1;

/**
 * Obtiene todos los usuarios almacenados
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 * @returns {Object} Lista de usuarios en formato JSON
 */
const getAllUsers = (req, res) => {
    // Devuelve el arreglo de usuarios con status 200
    return res.status(200).json(users);
};

/**
 * Crea un nuevo usuario si se proveen nombre y correo válidos
 * @param {Object} req - Objeto de solicitud Express con body conteniendo name y email
 * @param {Object} res - Objeto de respuesta Express
 * @returns {Object} Usuario creado o mensaje de error
 */
const createUser = (req, res) => {
    // Extraer nombre y correo del cuerpo de la solicitud
    const { name, email } = req.body;

    // Validación básica de entrada: verificar que name y email existan
    if (!name || !email) {
        return res.status(400).json({
            error: 'Se requieren los campos name y email'
        });
    }

    // Validación del formato del email usando expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: 'El formato del email no es válido'
        });
    }

    // Validación de que el nombre tenga al menos 2 caracteres
    if (name.trim().length < 2) {
        return res.status(400).json({
            error: 'El nombre debe tener al menos 2 caracteres'
        });
    }

    // Crear objeto usuario con ID único
    const newUser = {
        id: nextId++,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        createdAt: new Date().toISOString()
    };

    // Añadir el usuario al arreglo de usuarios
    users.push(newUser);

    // Responder con el usuario creado y status 201 (Created)
    return res.status(201).json(newUser);
};

/**
 * Función para reiniciar los datos (útil para pruebas)
 * Limpia el arreglo de usuarios y reinicia el contador de IDs
 */
const resetUsers = () => {
    users = [];
    nextId = 1;
};

/**
 * Obtiene el arreglo de usuarios (útil para pruebas)
 * @returns {Array} Arreglo de usuarios
 */
const getUsers = () => users;

// Exportar las funciones del controlador
module.exports = {
    getAllUsers,
    createUser,
    resetUsers,
    getUsers
};
