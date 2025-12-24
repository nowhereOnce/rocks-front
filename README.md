# 🪨 Rock Samples Frontend

Una aplicación web moderna construida con **React** para visualizar y gestionar un catálogo interactivo de muestras geológicas. Proporciona una interfaz intuitiva para búsqueda, filtrado y operaciones CRUD sobre especímenes de rocas.

**Stack:** React • Vite • Material-UI • Axios • React Router

> Este repositorio requiere de tener el [Backend](https://github.com/nowhereOnce/rocks-back-dockerized) corriendo.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Desarrollo Local](#desarrollo-local)
- [Build y Deployment](#build-y-deployment)
- [Troubleshooting](#troubleshooting)

---

## ✨ Características

- **Interfaz Responsiva** adaptada a desktop, tablet y móvil
- **Tabla Interactiva** con paginación, ordenamiento y búsqueda
- **Filas Expandibles** para visualizar detalles completos de muestras
- **Búsqueda en Tiempo Real** con filtrado instantáneo
- **CRUD Completo** (Crear, Leer, Actualizar, Eliminar) de muestras
- **Sistema de Autenticación** basado en tokens
- **Material-UI Components** para diseño profesional
- **Custom Hooks** para lógica reutilizable

---

## 🔧 Requisitos Previos

- **Node.js** ≥ 16.0
- **npm** ≥ 8.0 o **yarn** ≥ 1.22
- **Backend corriendo** en http://localhost:8000 (o puerto configurable)

---

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <link-repositorio>
cd rocks-front
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar URL del Backend

Edita `src/services/api.js`:

```javascript
const API_URL = 'http://localhost:8000/api';  // Cambiar según el backend
```

### 4. Ejecutar servidor de desarrollo

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador. **La app se recargará automáticamente al editar archivos.**

---

## 📁 Estructura del Proyecto

```
rocks-front/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Barra superior
│   │   ├── TableComponent.jsx      # Tabla de muestras
│   │   ├── SearchBar.jsx           # Búsqueda
│   │   ├── FormButton.jsx          # Botón crear muestra
│   │   ├── FormContent.jsx         # Formulario
│   │   ├── Actions.jsx             # Editar/eliminar
│   │   ├── ExpandedComponent.jsx   # Detalles ampliados
│   │   ├── CustomDialog.jsx        # Modal
│   │   └── LoginButton.jsx         # Autenticación
│   ├── hooks/
│   │   └── useFetch.js             # Fetch de datos
│   ├── pages/
│   │   └── HomePage.jsx            # Página principal
│   ├── services/
│   │   └── api.js                  # Configuración Axios
│   ├── utils/
│   │   └── requestErrorHandler.js  # Manejo de errores
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🧩 Componentes Principales

### **HomePage.jsx**

Componente principal que orquesta la aplicación:

- Obtiene datos de la API via `useFetch()`
- Mantiene estado de búsqueda
- Gestiona autenticación
- Renderiza Header, SearchBar y TableComponent

### **TableComponent.jsx**

Tabla interactiva con:

- Columnas: Nombre Roca, Localidad, País, Imagen
- Paginación y ordenamiento
- Filas expandibles con detalles
- Controles de Acciones (Editar/Eliminar)

### **SearchBar.jsx**

Campo de búsqueda que filtra en tiempo real por nombre de roca.

### **FormButton.jsx + FormContent.jsx**

Botón flotante que abre modal para crear nueva muestra:

- Validación de campos
- POST request a `/api/samples`
- Recarga tabla después de guardar

### **Actions.jsx**

Botones Editar/Eliminar por fila (solo si autenticado).

### **ExpandedComponent.jsx**

Detalles ampliados de una muestra (mostrado al expandir fila).

### **LoginButton.jsx**

Modal de login con autenticación basada en tokens.

---

## 🔌 Integración Backend

La aplicación se conecta a una API FastAPI mediante Axios:

```javascript
// Obtener muestras
GET /api/samples/

// Crear muestra
POST /api/samples/
Body: { rock_name, location_name, location_country, picture, cut, thin_section }

// Actualizar muestra
PUT /api/samples/{id}

// Eliminar muestra
DELETE /api/samples/{id}
```

**Importante:** Verifica que el backend esté corriendo antes de iniciar el frontend.

```bash
# Si usas Docker Compose
cd rocks-back-dockerized
docker-compose up

# O si FastAPI local
cd app
python runserver.py
```

---

## 🐛 Troubleshooting

### ❌ "Cannot GET /samples" o tabla vacía

**Causa:** Backend no está corriendo.

```bash
# Verifica que el backend responde
curl http://localhost:8000/api/samples/

# Si da error, inicia el backend
cd rocks-back-dockerized
docker-compose up
```

### ❌ "CORS policy blocked request"

**Causa:** Backend no tiene CORS configurado.

**Solución:** En `app/src/__init__.py`, configura CORS:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### ❌ URL de API incorrecta

Si el backend corre en otro puerto, actualiza `src/services/api.js`:

```javascript
// Para FastAPI en puerto 8003
const API_URL = 'http://localhost:8003';

// Para producción
const API_URL = 'https://api.rocks.com/api';
```

### ❌ Los datos no se actualizan después de crear muestra

Verifica que en `FormContent.jsx` se llame a `reload()` después de POST:

```javascript
const handleSubmit = async (formData) => {
    await axios.post(`${API_URL}/samples`, formData);
    reload();      // ← Crucial
    closeModal();
};
```

---

## ✅ Checklist de Inicio

- [ ] Node.js ≥ 16 instalado
- [ ] Dependencias instaladas (`npm install`)
- [ ] Backend corriendo
- [ ] URL de API configurada en `src/services/api.js`
- [ ] `npm run dev` ejecutado
- [ ] Frontend accesible en http://localhost:5173
- [ ] Tabla carga datos desde API
- [ ] Búsqueda filtra en tiempo real

---

## 📚 Recursos

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Material-UI Components](https://mui.com/)
- [Axios Documentation](https://axios-http.com/)

---

## 👨‍💻 Autor

**Aguilar Ramos Enrique Alejandro** | Frontend Development • React • UI/UX

---

**¡Gracias por usar Rock Samples Frontend!** 🪨✨
