# 🧪 Proyecto QA Automation con Cypress

Este repositorio contiene una suite de **pruebas automatizadas End-to-End (E2E)** desarrolladas con **Cypress**, enfocadas en validar funcionalidades clave de aplicaciones web públicas y de práctica, aplicando **buenas prácticas de QA Automation**.

El proyecto fue construido con fines **educativos y profesionales**, y forma parte de mi **portafolio como QA Automation Junior**.

---

## 🎯 Objetivos del proyecto

- Automatizar escenarios funcionales reales
- Validar flujos positivos y negativos
- Aplicar buenas prácticas en selectores y validaciones
- Organizar pruebas de forma clara y mantenible
- Preparar un proyecto presentable para entrevistas técnicas

---

## 🛠 Tecnologías utilizadas

- **Cypress**
- **JavaScript**
- **Node.js**
- **Fixtures (JSON)** para manejo de datos de prueba

---

## 📂 Estructura del Proyecto

```text
cypress/
├── e2e/                     # Archivos de prueba (Test Suites)
│   ├── visitaWeb.cy.js
│   ├── formularioBasico.cy.js
│   └── login.cy.js
├── fixtures/                # Datos estáticos (Usuarios, contraseñas)
│   └── users.json
├── support/                 # Comandos personalizados y configuraciones
├── screenshots/             # Evidencias de fallos (generadas automáticamente)
├── cypress.config.js        # Configuración global de Cypress
└── package.json             # Dependencias del proyecto
```

---

## 🧪 Escenarios automatizados

### 🔹 Validación de página web
📄 `visitaWeb.cy.js`

- Verificación de URL
- Validación de título de la página
- Validación de texto visible

---

### 🔹 Acciones básicas en formularios
📄 `formularioBasico.cy.js`

- Ingreso de texto en inputs
- Selección de checkboxes habilitados
- Selección de radio buttons
- Selección de opciones en listas desplegables
- Validación de estados finales (`value`, `checked`)

---

### 🔹 Login – Flujos positivos y negativos
📄 `login.cy.js`

- Login exitoso con usuario válido
- Login con usuario bloqueado
- Login con credenciales incorrectas
- Intento de login con campos vacíos
- Acceso no autorizado a URL protegida
- Captura automática de evidencias (screenshots)

---

## ✅ Buenas prácticas aplicadas

✔ Uso de `data-test` selectors  
✔ Separación clara de escenarios  
✔ Uso de `beforeEach` y `afterEach`  
✔ Manejo de datos con fixtures  
✔ Validaciones claras y robustas  
✔ Tests independientes y repetibles  

---

## 🚀 Cómo ejecutar el proyecto

### 1️⃣ Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd nombre-del-proyecto ```

### 2️⃣ Instalar Dependencias
```bash
npm install```

### 3️⃣ Ejecutar Cypress

Modo interactivo:
```bash```
npx cypress open


Modo headless:
```bash```
npx cypress run
```

## 👩‍💻 Autora

**Magally Silva**
**QA | QA Automation Junior**

### 📌 Proyecto desarrollado como parte de mi formación en testing y automatización.