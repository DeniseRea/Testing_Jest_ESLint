# 🧪 API REST - Gestión de Usuarios con Testing
## Laboratorio de Verificación y Validación

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

### 📋 Descripción
Práctica de laboratorio enfocada en **Verificación y Validación** de software mediante la implementación de una API REST para gestión de usuarios. El proyecto incluye pruebas unitarias exhaustivas con Jest y Supertest, además de verificación de calidad de código con ESLint.

### 🎯 Objetivos Cumplidos
- ✅ Implementación de API REST con Express.js
- ✅ Pruebas unitarias con cobertura superior al 90%
- ✅ Verificación de código con ESLint
- ✅ Validación de endpoints con Supertest
- ✅ Documentación técnica completa

---

## 🏗️ Arquitectura del Proyecto

```
Testing_Jest_ESLint/
├── src/
│   ├── app.js              # Configuración principal de Express
│   ├── server.js           # Punto de entrada del servidor
│   ├── controllers/
│   │   └── user.controller.js   # Lógica de negocio
│   └── routes/
│       └── user.routes.js       # Definición de endpoints
├── test/
│   └── user.test.js        # Suite completa de pruebas
├── doc/
│   ├── informe_laboratorio.tex  # Documentación técnica
│   └── img/                     # Capturas de evidencia
├── eslint.config.js        # Configuración de ESLint
└── package.json           # Dependencies y scripts
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** v18+ 
- **npm** v9+

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd Testing_Jest_ESLint

# Instalar dependencias
npm install
```

---

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor en puerto 3000 |
| `npm test` | Ejecuta todas las pruebas unitarias |
| `npm run test:coverage` | Genera reporte de cobertura |
| `npm run lint` | Verifica calidad del código |
| `npm run lint:fix` | Corrige problemas automáticamente |

---

## 📡 Endpoints de la API

### **Información General**
```http
GET /
```
**Respuesta:**
```json
{
  "message": "API de Gestión de Usuarios",
  "version": "1.0.0",
  "endpoints": {
    "users": "/users"
  }
}
```

### **Gestión de Usuarios**

#### Listar usuarios
```http
GET /users
```

#### Crear usuario
```http
POST /users
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@example.com"
}
```

**Validaciones:**
- ✅ `name`: Requerido, mínimo 2 caracteres
- ✅ `email`: Requerido, formato válido
- ✅ Email normalizado a minúsculas
- ✅ ID único autogenerado

---

## 🧪 Suite de Pruebas

### Cobertura Alcanzada
| Métrica | Valor | Objetivo |
|---------|--------|----------|
| **Statements** | 95.12% | > 90% ✅ |
| **Branches** | 100% | > 90% ✅ |
| **Functions** | 85.71% | > 80% ✅ |
| **Lines** | 95% | > 90% ✅ |

### Pruebas Implementadas (15 total)

#### 🔍 **GET /users** (2 pruebas)
- Lista vacía inicialmente
- Devuelve usuarios después de crearlos

#### 📝 **POST /users** (6 pruebas)
- Creación exitosa con datos válidos
- Validación de campos requeridos
- Validación de formato de email
- Validación de longitud de nombre
- Normalización de email
- Generación de IDs secuenciales

#### 🚫 **Manejo de Errores** (2 pruebas)
- Rutas no encontradas (404)
- Métodos no permitidos

#### 🔄 **Flujo Completo** (2 pruebas)
- Creación y listado múltiple
- Persistencia en memoria

### Ejecutar Pruebas

```bash
# Todas las pruebas
npm test

# Con cobertura detallada
npm run test:coverage

# Pruebas específicas
npx jest --testNamePattern="GET /users"

# Modo watch
npx jest --watch
```

---

## 📊 Calidad de Código

### ESLint Configuration
- ✅ Reglas de ES2021
- ✅ Estilo consistente (4 espacios, comillas simples)
- ✅ Mejores prácticas de Node.js
- ✅ Configuración específica para Jest

### Métricas de Calidad
- **Errores:** 0
- **Warnings:** Mínimos (solo técnicos)
- **Estilo:** 100% consistente
- **Complejidad:** Baja

---

## 🌐 Uso de la API

### Iniciar el servidor
```bash
npm start
```
**Output esperado:**
```
Servidor corriendo en http://localhost:3000
Endpoints disponibles:
  - GET  /users  - Obtener todos los usuarios
  - POST /users  - Crear un nuevo usuario
```

### Ejemplos con cURL

```bash
# Obtener información de la API
curl http://localhost:3000

# Listar usuarios (inicialmente vacío)
curl http://localhost:3000/users

# Crear un usuario
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana García","email":"ana@example.com"}'

# Verificar usuario creado
curl http://localhost:3000/users
```

---

## 📚 Tecnologías Utilizadas

### **Backend**
- **Express.js** `^5.2.1` - Framework web minimalista
- **Node.js** - Runtime de JavaScript

### **Testing**
- **Jest** `^30.2.0` - Framework de testing
- **Supertest** `^7.1.4` - Testing de APIs HTTP

### **Code Quality**
- **ESLint** `^9.39.1` - Linter de JavaScript
- **@eslint/js** `^9.39.1` - Configuraciones recomendadas

---

## 📈 Resultados Destacados

### ✅ **Pruebas Exitosas**
- **15/15** pruebas pasando
- **0** pruebas fallidas
- **< 2 segundos** tiempo de ejecución

### ✅ **Alta Cobertura**
- **95%+** cobertura de líneas
- **100%** cobertura de ramas
- **Archivos críticos** cubiertos al 100%

### ✅ **Código Limpio**
- **0 errores** de ESLint
- **Estilo consistente** en todo el proyecto
- **Buenas prácticas** de Node.js aplicadas

---

## 👥 Equipo de Desarrollo

- **Mesias Mariscal** - Desarrollador
- **Denise Rea** - Desarrolladora  
- **Julio Viche** - Desarrollador

**Docente:** Ing. Enrique Calvopiña, MsC.  
**Asignatura:** Pruebas de Software  
**Universidad:** Universidad de las Fuerzas Armadas ESPE

---

## 📄 Documentación Adicional

La documentación técnica completa se encuentra en:
- `doc/informe_laboratorio.tex` - Informe técnico detallado
- `doc/img/` - Capturas de evidencia
- Comentarios en código fuente

---

## 🔄 Flujo de Trabajo Recomendado

1. **Desarrollo** → Implementar funcionalidad
2. **Testing** → `npm test` para verificar
3. **Calidad** → `npm run lint` para validar
4. **Cobertura** → `npm run test:coverage` para métricas
5. **Corrección** → `npm run lint:fix` si es necesario
6. **Validación** → `npm start` para pruebas manuales

---

## 🎉 Estado del Proyecto

![Tests](https://img.shields.io/badge/Tests-15%2F15%20Passing-brightgreen)
![Coverage](https://img.shields.io/badge/Coverage-95%25-brightgreen)
![ESLint](https://img.shields.io/badge/ESLint-0%20Errors-brightgreen)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)

**Proyecto completo y funcional** ✅