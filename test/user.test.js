/**
 * Pruebas Unitarias para API de Usuarios
 * Utiliza Jest y Supertest para validar el comportamiento de los endpoints
 * 
 * @author Laboratorio de Programación Avanzada
 * @version 1.0.0
 */

// Importar supertest - cliente HTTP para pruebas
const request = require('supertest');

// Importar la aplicación Express
const app = require('../src/app');

// Importar funciones auxiliares del controlador para resetear datos
const { resetUsers, getUsers } = require('../src/controllers/user.controller');

/**
 * Suite de pruebas para la API de Usuarios
 * Agrupa todas las pruebas relacionadas con el endpoint /users
 */
describe('API de Usuarios - /users', () => {

    /**
     * Hook que se ejecuta antes de cada prueba
     * Resetea los datos para asegurar un estado limpio
     */
    beforeEach(() => {
        resetUsers();
    });

    /**
     * Suite de pruebas para GET /users
     */
    describe('GET /users', () => {

        /**
         * Prueba: GET devuelve lista vacía inicialmente
         * Verifica que al inicio no hay usuarios en el sistema
         */
        test('debería devolver una lista vacía inicialmente', async () => {
            const response = await request(app)
                .get('/users')
                .expect('Content-Type', /json/)
                .expect(200);

            // Verificar que la respuesta sea un arreglo vacío
            expect(response.body).toEqual([]);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(0);
        });

        /**
         * Prueba: GET devuelve usuarios después de crearlos
         * Verifica el flujo completo de crear y listar usuarios
         */
        test('debería devolver los usuarios después de crearlos', async () => {
            // Crear primer usuario
            await request(app)
                .post('/users')
                .send({ name: 'Juan Pérez', email: 'juan@example.com' })
                .expect(201);

            // Crear segundo usuario
            await request(app)
                .post('/users')
                .send({ name: 'María García', email: 'maria@example.com' })
                .expect(201);

            // Obtener lista de usuarios
            const response = await request(app)
                .get('/users')
                .expect(200);

            // Verificar que hay 2 usuarios
            expect(response.body.length).toBe(2);
            expect(response.body[0].name).toBe('Juan Pérez');
            expect(response.body[1].name).toBe('María García');
        });
    });

    /**
     * Suite de pruebas para POST /users
     */
    describe('POST /users', () => {

        /**
         * Prueba: POST crea un nuevo usuario correctamente
         * Verifica que se puede crear un usuario con datos válidos
         */
        test('debería crear un nuevo usuario correctamente', async () => {
            const newUser = {
                name: 'Carlos López',
                email: 'carlos@example.com'
            };

            const response = await request(app)
                .post('/users')
                .send(newUser)
                .expect('Content-Type', /json/)
                .expect(201);

            // Verificar la respuesta
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toBe(1);
            expect(response.body.name).toBe('Carlos López');
            expect(response.body.email).toBe('carlos@example.com');
            expect(response.body).toHaveProperty('createdAt');

            // Verificar que el usuario fue añadido al arreglo
            expect(getUsers().length).toBe(1);
        });

        /**
         * Prueba: POST rechaza petición sin nombre
         * Verifica la validación de campos requeridos
         */
        test('debería rechazar petición sin nombre', async () => {
            const response = await request(app)
                .post('/users')
                .send({ email: 'test@example.com' })
                .expect('Content-Type', /json/)
                .expect(400);

            // Verificar mensaje de error
            expect(response.body).toHaveProperty('error');
            expect(response.body.error).toContain('name');
        });

        /**
         * Prueba: POST rechaza petición sin email
         * Verifica la validación de campos requeridos
         */
        test('debería rechazar petición sin email', async () => {
            const response = await request(app)
                .post('/users')
                .send({ name: 'Test User' })
                .expect('Content-Type', /json/)
                .expect(400);

            // Verificar mensaje de error
            expect(response.body).toHaveProperty('error');
            expect(response.body.error).toContain('email');
        });

        /**
         * Prueba: POST rechaza petición con cuerpo vacío
         * Verifica que se validan ambos campos
         */
        test('debería rechazar petición con cuerpo vacío', async () => {
            const response = await request(app)
                .post('/users')
                .send({})
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body).toHaveProperty('error');
        });

        /**
         * Prueba: POST rechaza email con formato inválido
         * Verifica la validación del formato de email
         */
        test('debería rechazar email con formato inválido', async () => {
            const response = await request(app)
                .post('/users')
                .send({ name: 'Test User', email: 'email-invalido' })
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body).toHaveProperty('error');
            expect(response.body.error).toContain('email');
        });

        /**
         * Prueba: POST rechaza nombre muy corto
         * Verifica que el nombre tenga al menos 2 caracteres
         */
        test('debería rechazar nombre muy corto', async () => {
            const response = await request(app)
                .post('/users')
                .send({ name: 'A', email: 'test@example.com' })
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body).toHaveProperty('error');
            expect(response.body.error).toContain('nombre');
        });

        /**
         * Prueba: POST normaliza el email a minúsculas
         * Verifica que el email se guarde en minúsculas
         */
        test('debería normalizar el email a minúsculas', async () => {
            const response = await request(app)
                .post('/users')
                .send({ name: 'Test User', email: 'TEST@EXAMPLE.COM' })
                .expect(201);

            expect(response.body.email).toBe('test@example.com');
        });

        /**
         * Prueba: POST genera IDs secuenciales
         * Verifica que cada usuario tenga un ID único e incremental
         */
        test('debería generar IDs secuenciales', async () => {
            const response1 = await request(app)
                .post('/users')
                .send({ name: 'Usuario Uno', email: 'uno@example.com' })
                .expect(201);

            const response2 = await request(app)
                .post('/users')
                .send({ name: 'Usuario Dos', email: 'dos@example.com' })
                .expect(201);

            expect(response1.body.id).toBe(1);
            expect(response2.body.id).toBe(2);
        });
    });

    /**
     * Suite de pruebas para manejo de rutas no encontradas
     */
    describe('Rutas no encontradas', () => {

        /**
         * Prueba: Devuelve 404 para rutas inexistentes
         */
        test('debería devolver 404 para rutas inexistentes', async () => {
            const response = await request(app)
                .get('/ruta-inexistente')
                .expect('Content-Type', /json/)
                .expect(404);

            expect(response.body).toHaveProperty('error');
            expect(response.body.error).toContain('no encontrada');
        });

        /**
         * Prueba: Devuelve 404 para método no permitido
         */
        test('debería devolver 404 para DELETE en /users', async () => {
            const response = await request(app)
                .delete('/users')
                .expect(404);

            expect(response.body).toHaveProperty('error');
        });
    });

    /**
     * Suite de pruebas para la ruta raíz
     */
    describe('GET /', () => {

        /**
         * Prueba: La ruta raíz devuelve información de la API
         */
        test('debería devolver información de la API', async () => {
            const response = await request(app)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body).toHaveProperty('message');
            expect(response.body).toHaveProperty('version');
            expect(response.body).toHaveProperty('endpoints');
        });
    });
});

/**
 * Suite de pruebas de flujo completo (End-to-End simulado)
 * Verifica el flujo completo de crear y listar usuarios
 */
describe('Flujo completo de usuarios', () => {

    beforeEach(() => {
        resetUsers();
    });

    /**
     * Prueba: Flujo completo de creación y listado
     */
    test('debería permitir crear múltiples usuarios y listarlos', async () => {
        // Crear varios usuarios
        const usuarios = [
            { name: 'Ana Torres', email: 'ana@example.com' },
            { name: 'Pedro Ruiz', email: 'pedro@example.com' },
            { name: 'Laura Díaz', email: 'laura@example.com' }
        ];

        // Crear cada usuario
        for (const usuario of usuarios) {
            await request(app)
                .post('/users')
                .send(usuario)
                .expect(201);
        }

        // Verificar que todos fueron creados
        const response = await request(app)
            .get('/users')
            .expect(200);

        expect(response.body.length).toBe(3);
        
        // Verificar que los nombres coinciden
        const nombres = response.body.map(u => u.name);
        expect(nombres).toContain('Ana Torres');
        expect(nombres).toContain('Pedro Ruiz');
        expect(nombres).toContain('Laura Díaz');
    });

    /**
     * Prueba: Verificar persistencia en memoria durante sesión
     */
    test('debería mantener usuarios en memoria durante la sesión', async () => {
        // Crear usuario
        await request(app)
            .post('/users')
            .send({ name: 'Usuario Persistente', email: 'persistente@example.com' })
            .expect(201);

        // Verificar primera vez
        let response = await request(app).get('/users');
        expect(response.body.length).toBe(1);

        // Crear otro usuario
        await request(app)
            .post('/users')
            .send({ name: 'Segundo Usuario', email: 'segundo@example.com' })
            .expect(201);

        // Verificar que ambos están
        response = await request(app).get('/users');
        expect(response.body.length).toBe(2);
    });
});
