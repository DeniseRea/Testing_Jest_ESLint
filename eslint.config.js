/**
 * Configuración de ESLint
 * Define las reglas de verificación de código para el proyecto
 * 
 * @author Laboratorio de Programación Avanzada
 * @version 1.0.0
 */

// Importar la configuración base de reglas recomendadas de ESLint para JavaScript
const js = require('@eslint/js');

// Exportar un arreglo de configuraciones específicas para ESLint
module.exports = [
    // Usar la configuración recomendada de ESLint
    js.configs.recommended,
    
    // Configuración específica para archivos en src/
    {
        // Configurar los archivos dentro de la carpeta src con extensión .js
        files: ['src/**/*.js'],
        
        // Opciones del lenguaje para estos archivos
        languageOptions: {
            // Versión de ECMAScript a usar
            ecmaVersion: 2021,
            // Tipo de módulo (commonjs para Node.js)
            sourceType: 'commonjs',
            // Variables globales disponibles
            globals: {
                // Variables globales de Node.js
                require: 'readonly',
                module: 'readonly',
                exports: 'readonly',
                process: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                console: 'readonly'
            }
        },
        
        // Reglas de ESLint que se aplicarán a estos archivos
        rules: {
            // Reglas de errores posibles
            'no-console': 'off',              // Permitir console.log
            'no-unused-vars': 'warn',         // Advertir sobre variables no usadas
            'no-undef': 'error',              // Error si se usa variable no definida
            
            // Reglas de mejores prácticas
            'eqeqeq': 'error',                // Requerir === y !==
            'no-eval': 'error',               // Prohibir uso de eval()
            'no-implied-eval': 'error',       // Prohibir eval implícito
            'curly': 'error',                 // Requerir llaves en bloques
            'no-multi-spaces': 'error',       // Prohibir espacios múltiples
            
            // Reglas de estilo
            'indent': ['error', 4],           // Indentación de 4 espacios
            'quotes': ['error', 'single'],    // Usar comillas simples
            'semi': ['error', 'always'],      // Requerir punto y coma
            'comma-dangle': ['error', 'never'], // Sin coma final
            'no-trailing-spaces': 'error',    // Sin espacios al final
            'eol-last': ['error', 'always'],  // Línea vacía al final
            'no-multiple-empty-lines': ['error', { max: 2 }], // Máximo 2 líneas vacías
            
            // Reglas de ES6
            'prefer-const': 'error',          // Preferir const sobre let
            'no-var': 'error',                // Prohibir var, usar let/const
            'arrow-spacing': 'error',         // Espacios en arrow functions
            
            // Reglas específicas para Node.js
            'no-path-concat': 'error',        // Prohibir concatenación de rutas
            'callback-return': 'warn'         // Advertir si no se retorna en callback
        }
    },
    
    // Configuración para archivos de prueba
    {
        files: ['test/**/*.js'],
        
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'readonly',
                exports: 'readonly',
                process: 'readonly',
                console: 'readonly',
                // Globales de Jest
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                jest: 'readonly'
            }
        },
        
        rules: {
            'no-unused-vars': 'warn',
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always']
        }
    }
];
