**CAMPO
Departamento de Ciencias de la
Computación**
Código de documento: VDC-GUI- 2024 - V2- 015 REV. UPDI:2024-oct- 08
**DEPARTAMENTO: CIENCIAS DE LA COMPUTACIÓN CARRERA: INGENIERÍA DE SOFTWARE
ASIGNATURA:** Programación Avanzada
**PERÍODO
LECTIVO:**^20255 **NIVEL:**^ 6to^
**DOCENTE:** Ing. Enrique Calvopiña, MsC. **NRC:** 23311 **PRÁCTICA N°:** 2
**LABORATORIO DONDE SE DESARROLLARÁ LA PRÁCTICA** Laboratorio H- 204
**TEMA DE LA
PRÁCTICA:**
Verificación y Validación
**INTRODUCCIÓN:
En esta actividad se utilizarán las tecnologías Node.js, Express, ESLint y Jest + Supertest, para poder realizar verificación y validación
del código de un proyecto básico que maneje una API REST para gestión de usuarios. Mediante estas tecnologías se podrá realizar
verificaciones de buenas prácticas de programación, verificar el comportamiento correcto de los endpoints de la API, lo que
contribuye a mantener un código limpio, legible y menos propenso a errores.
OBJETIVOS:**
● Aplicar técnicas de verificación sobre el código.
● Aplicar técnicas de validación sobre el código.
● Generación de reglas para la verificación del código.
● Creación de pruebas unitarias para la validación del código
**MATERIALES:
REACTIVOS:**
No aplica
**INSUMOS:**
● Una PC con Windows/Linux
● NodeJs
● Acceso a Internet
**EQUIPOS:**
Windows 10 o superior, Procesador Intel® Core™ i7-6700T o superior, 12GB RAM o superior, 480GB SSD o superior, Intel HD Graphics 530,
similar o superior.
**MUESTRA:**
No aplica
**INSTRUCCIONES:**

1. Utilizar como material principal de apoyo, aquel indicado en clase por el docente.
2. No olvide incluir capturas de pantallas de todas las actividades realizadas durante la práctica.
3. En los datos ingresados, por favor usar sus datos personales, con el fin de verificar la realización de este trabajo.
4. Se debe comentar el código como mejor práctica de programación.
**ACTIVIDADES POR DESARROLLAR:**

## PARTE 1: Establecer la estructura del proyecto y configurar el ambiente de desarrollo

```
Paso 1: Estructura del proyecto.
a. Se debe crear una estructura básica para un proyecto JS teniendo en cuenta:
```
- Src
- Routes
- Controllers


```
CAMPO
Departamento de Ciencias de la
Computación
Código de documento: VDC-GUI- 2024 - V2- 015 REV. UPDI:2024-oct- 08
```
- Test
- Archivos de configuración
**Paso 2: Instalar las tecnologías necesarias para el ambiente de desarrollo y pruebas.**
a. Crear el archivo package.json ejecutando el siguiente comando: **_npm init_**
b. Instalar express: **_npm install express_**
c. Instalar las librerías necesarias: **_npm install --save-dev jest supertest eslint_**

## PARTE 2: Creación de API de Gestión de Usuarios

**Paso 1: Configurar el controlador.**
a. Crear el archivo controllers/user.controller.js.
b. Simular de una base de datos en memoria (arreglo).
c. Función para devolver todos los usuarios almacenados.
d. Función para crear un nuevo usuario si se proveen nombre y correo válidos.
e. Generar una validación básica de entrada
f. Crear un objeto usuario y añadirlo al arreglo de usuarios
g. Responder con el usuario creado status 201
h. Exportar las funciones creadas con module.exports.
**Paso 2: Configurar las rutas del servidor.**
a. Crear el archivo routes/user.routes.js.
b. Importar los módulos necesarios: express y funciones del controlador.
c. Definir ruta GET para obtener todos los usuarios.
d. Definir ruta POST para crear un nuevo usuario.
e. Exportar el router con module.exports.
**Paso 3 : Configurar la entrada principal.**
a. Crear el archivo app.js.
b. Importar los módulos necesarios: express y el archivo donde se manejarán las rutas _user.routes.js_.
c. Crea una instancia de la aplicación Express
d. Usar un middleware para parsear JSON del cuerpo de las solicitudes.
e. Establecer la ruta base para los usuarios.
f. Usar un manejador de rutas no encontradas (404).
g. Exportar la instancia app para poder usarla en tests o en un archivo de servidor separado.

## PARTE 3: Verificación y validación


**CAMPO
Departamento de Ciencias de la
Computación**
Código de documento: VDC-GUI- 2024 - V2- 015 REV. UPDI:2024-oct- 08
**Paso 1: Validación: Pruebas con Jest y Supertest.**
a. Crear el archivo test/user.test.js.
b. Importar el cliente HTTP son supertest para pruebas.
c. Importar app Express.
d. Crear prueba que GET devuelva lista vacía inicialmente.
e. Crear prueba que POST cree un nuevo usuario correctamente
f. Crear prueba que el endpoint rechace peticiones inválidas
g. Ejecutar las pruebas con el comando: **_npm test_**
**Paso 2: Verificación: ESLint.**
a. Crear el archivo eslint.config.js.
b. Importar la configuración base de reglas recomendadas de ESLint para JavaScript.
c. Exportar un arreglo de configuraciones específicas para ESLint.
d. Configurar los archivos dentro de la carpeta src con extensión .js.
e. Gestionar opciones del lenguaje para estos archivos.
f. Crear reglas de ESLint que se aplicarán a estos archivos.
**SECCIÓN DE PREGUNTAS/ACTIVIDADES**

**1. Simular almacenamiento en memoria y listar usuarios**
    a. **Actividad:** Implementar una ruta GET /users que retorne una lista de usuarios en memoria (array local).
    b. **Prueba:** Crear usuarios con POST /users y luego verificar el contenido de GET /users.
    c. **Objetivo:** Pruebas de flujo completo (end-to-end simulado).
**2. Verificar cobertura de pruebas con Jest**
    a. **Actividad:** Ejecutar jest --coverage, analizar el reporte y agregar pruebas hasta lograr >90% de cobertura.
    b. **Objetivo:** Comprender el impacto de la cobertura y escribir pruebas adicionales.
**RESULTADOS OBTENIDOS:**
a. Realizar el informe en el formato general de informes de laboratorio.
b. Evidencia con capturas las actividades prácticas realizadas.
c. Anexar el código fuente en el informe.
**CONCLUSIONES:**
- Escribir al menos dos conclusiones.
**RECOMENDACIONES:**
- Escribir al menos dos recomendaciones.


**CAMPO
Departamento de Ciencias de la
Computación**
Código de documento: VDC-GUI- 2024 - V2- 015 REV. UPDI:2024-oct- 08
**FIRMAS
F: ..............................................
Nombre: Ing. Enrique Calvopiña, MsC.
DOCENTE
F: .......................................................
Nombre: Ing. Juan Fernando Galarraga, Mgtr.
COORDINADOR DE ÁREA DE CONOCIMIENTO
F: ...................................................
Nombre: Crnl (SP) Fidel Castro de la
Cruz
JEFE DE LABORATORIO**


