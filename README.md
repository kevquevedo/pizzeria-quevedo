# 🍕 Pizzería Quevedo

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-21-red?style=flat-square&logo=angular)](https://angular.dev)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?style=flat-square&logo=firebase)](https://firebase.google.com)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Deploy](https://img.shields.io/badge/Live-pizzeria--quevedo.web.app-yellow?style=flat-square&logo=firebase)](https://pizzeria-quevedo.web.app)

**Sitio web oficial de Pizzería Quevedo — pizza napolitana de masa madre y horno a leña en Buenos Aires.**

[🌐 Ver sitio en vivo](https://pizzeria-quevedo.web.app) · [📋 Reportar un bug](https://github.com/kevquevedo/pizzeria-quevedo/issues)

</div>

---

## 📸 Capturas del sitio

### Hero — Landing
![Hero de Pizzería Quevedo](<img width="2509" height="1086" alt="image" src="https://github.com/user-attachments/assets/bf8e965a-9eb0-410d-bd8c-4546d442cb11" />)

### Menú interactivo con filtros
![Sección menú con categorías](<img width="2509" height="1115" alt="image" src="https://github.com/user-attachments/assets/2d2bec1b-3bef-44b4-b8dd-cee1239ec3a9" />)

### Nuestra Filosofía
![Cards La Masa, El Horno, Los Ingredientes](<img width="2490" height="684" alt="image" src="https://github.com/user-attachments/assets/2780f48a-872a-4d7c-bfaf-bc2736af5af7" />)

### Galería y Reseñas
![Galería de fotos](<img width="2499" height="944" alt="image" src="https://github.com/user-attachments/assets/8fd7547a-f330-4e63-b243-365420621a5b" />)
![Reseñas de clientes](<img width="2486" height="877" alt="image" src="https://github.com/user-attachments/assets/05666422-46b1-4257-bacc-e1d6f9e49636" />)

### Ubicación y Horarios
![Mapa y horarios del local](<img width="2486" height="891" alt="image" src="https://github.com/user-attachments/assets/b531e822-dff0-42e2-94dd-21198b1c16fa" />)

---

## 🧰 Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| [Angular](https://angular.dev) | 21 | Framework principal (standalone components) |
| [AngularFire](https://github.com/angular/angularfire) | 20 | Integración con Firebase (Firestore, Hosting) |
| [Firebase](https://firebase.google.com) | 12 | Backend as a Service + Hosting |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Estilos utilitarios |
| [TypeScript](https://www.typescriptlang.org) | 5.9 | Tipado estático |
| [Vitest](https://vitest.dev) | 4.x | Testing unitario |

---

## ✨ Funcionalidades

- **🏠 Hero animado** con tagline y llamados a la acción
- **🍕 Menú dinámico** con filtros por categoría (Pizzas, Empanadas, Bebidas, Postres) cargados desde Firestore
- **🛒 Carrito de compras** con botón flotante y contador
- **📖 Sección Nosotros** con historia y filosofía del local (masa madre, horno a leña, ingredientes frescos)
- **🖼️ Galería** de fotos del local y platos
- **⭐ Reseñas** de clientes
- **📍 Ubicación** con mapa Google Maps y horarios de atención
- **💬 Botón de WhatsApp** flotante para consultas
- **📱 Diseño responsive** adaptado a mobile y desktop

---

## 🚀 Instalación y uso local

### Prerrequisitos

- Node.js >= 18
- npm >= 10
- Angular CLI: `npm install -g @angular/cli`

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/kevquevedo/pizzeria-quevedo.git
cd pizzeria-quevedo

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm start
# → http://localhost:4200
```


## ⚙️ Variables de entorno

El archivo `src/environments/environment.ts` **no se sube al repositorio** por seguridad. En su lugar existe `src/environments/environment.example.ts` como plantilla.

Para configurar tu entorno local:

**1.** Copiá el archivo de ejemplo:
```bash
cp src/environments/environment.example.ts src/environments/environment.ts
```

**2.** Completá con tus claves de Firebase:
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'TU_API_KEY',
    authDomain: 'tu-proyecto.firebaseapp.com',
    projectId: 'tu-proyecto',
    storageBucket: 'tu-proyecto.appspot.com',
    messagingSenderId: 'TU_SENDER_ID',
    appId: 'TU_APP_ID',
  },
};
```

> 🔑 Encontrás los valores en **Firebase Console → Project Settings → SDK setup and configuration**.  
> ⚠️ Asegurate de que `environment.ts` esté en el `.gitignore`.

---

## 🏗️ Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo en `localhost:4200` |
| `npm run build` | Build de producción en `dist/` |
| `npm test` | Tests unitarios con Vitest |
| `npm run watch` | Build en modo watch (desarrollo) |

---

## 🌐 Deploy en Firebase Hosting

```bash
# Instalar Firebase CLI (una sola vez)
npm install -g firebase-tools

# Login
firebase login

# Build + Deploy
npm run build
firebase deploy
```

---

## 📁 Estructura del proyecto

```
pizzeria-quevedo/
├── src/
│   ├── app/
│   │   ├── core/                     # Lógica central de la aplicación
│   │   │   ├── models/               # Interfaces y tipos (Producto, CarritoItem, etc.)
│   │   │   └── services/             # Servicios globales (Firebase, carrito, etc.)
│   │   ├── features/                 # Módulos por funcionalidad
│   │   │   ├── carrito/              # Feature: carrito de compras
│   │   │   ├── home/                 # Feature: página principal
│   │   │   │   └── components/       # Secciones del home
│   │   │   │       ├── catalogo/     # Grilla de productos con filtros
│   │   │   │       ├── galeria/      # Galería de fotos
│   │   │   │       ├── hero/         # Sección hero / landing
│   │   │   │       ├── resenas/      # Reseñas de clientes
│   │   │   │       └── ubicacion/    # Mapa y horarios
│   │   │   └── menu/                 # Feature: página de menú
│   │   └── shared/                   # Componentes reutilizables en toda la app
│   │       └── components/
│   │           ├── footer/           # Pie de página
│   │           ├── navbar/           # Barra de navegación
│   │           └── whatsapp-button/  # Botón flotante de WhatsApp
│   └── environments/                 # Variables de entorno (dev / prod)
├── public/                           # Assets estáticos (imágenes, iconos)
├── firebase.json                     # Configuración Firebase Hosting
├── angular.json                      # Configuración Angular CLI
├── tailwind.config.js                # Configuración Tailwind CSS
└── README.md
```

---

## 📍 Información del local

| | |
|---|---|
| 📌 Dirección | Thames 1847, Palermo Hollywood, CABA |
| 📞 WhatsApp | +54 9 11 0000-0000 |
| 🕐 Mar–Jue | 12:00–15:00 · 20:00–00:00 |
| 🕐 Vie–Sáb | 12:00–15:30 · 20:00–01:00 |
| 🕐 Domingo | 12:00–23:00 |
| 🔴 Lunes | Cerrado |

---

## 👨‍💻 Autor

**Kevin Quevedo** — Proyecto de aprendizaje desarrollado con Angular 21 y Firebase.

[![GitHub](https://img.shields.io/badge/GitHub-kevquevedo-black?style=flat-square&logo=github)](https://github.com/kevquevedo)

---

> © 2026 Pizzería Quevedo. Hecho con ❤️ por Kevin.

