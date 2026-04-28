You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

---

## PROYECTO: Pizzería Quevedo

### Descripción
Web de catálogo para una pizzería ficticia llamada "Pizzería Quevedo".
Proyecto de aprendizaje desarrollado bajo los estándares qdev por Kevin Quevedo.
Sin fines comerciales. Etapa 1: catálogo. Etapa 2 futura: pedidos online y panel admin.

### Stack
- Angular 21 + TypeScript strict
- Tailwind CSS v3 + PostCSS
- Angular Signals (sin NgRx)
- Firebase (Firestore + Hosting)
- AngularFire (instalado con --legacy-peer-deps)
- Standalone components (sin NgModules)

### Paleta de colores ("Quevedo Noir")
- Fondo principal:     #0A0A0A
- Superficie cards:    #141414 y #1E1E1E
- Acento principal:    #E63946 (rojo napolitano)
- Acento secundario:   #F4A127 (dorado cálido)
- Texto principal:     #F1F1F1
- Texto secundario:    #A0A0A0

Configurar estos colores en tailwind.config.js bajo theme.extend.colors.

### Estructura de carpetas
src/app/
  core/
    services/        (servicios globales: productos, categorias)
    models/          (interfaces: Producto, Categoria)
  features/
    home/            (página principal con todas las secciones)
    menu/            (catálogo completo)
  shared/
    components/      (componentes reutilizables: navbar, footer, whatsapp-button)
  app.ts
  app.html
  app.routes.ts
  app.config.ts

### Estructura Firestore
Colección: categorias
  Documento ID: pizzas     { nombre: "Pizzas", orden: 1 }
  Documento ID: empanadas  { nombre: "Empanadas", orden: 2 }
  Documento ID: bebidas    { nombre: "Bebidas", orden: 3 }
  Documento ID: postres    { nombre: "Postres", orden: 4 }

Colección: productos
  Campos por documento:
    nombre        (string)
    descripcion   (string)
    precio        (number)
    categoriaId   (string)  <- referencia al ID del doc en categorias
    disponible    (boolean)
    imagen        (string)  <- URL de la imagen

### Secciones del sitio (en orden)
1. Hero          - Imagen/video de fondo, nombre, tagline, CTA
2. Promociones   - Destacados o promociones del día
3. Menú/Catálogo - Productos de Firestore con filtro por categoría + animación
4. Proceso       - Detrás de escena: horno, masa, equipo
5. Badges        - Íconos animados: "Masa madre", "Horno a leña", "Sin conservantes"
6. Nosotros      - Historia corta de la pizzería
7. Galería       - Fotos de la pizzería y sus productos
8. Reseñas       - Testimonios de clientes
9. Ubicación     - Google Maps embed + horarios
10. Footer       - Links, redes sociales, contacto
- WhatsApp flotante (en todas las páginas)

### Efectos y animaciones
- Scroll animations: elementos aparecen al hacer scroll (usar @angular/animations o CSS Intersection Observer)
- Dark mode toggle: implementar con clase en <html> y Tailwind dark:
- Filtro de menú: animación suave al filtrar por categoría
- Hero: efecto parallax o video de fondo

### Convenciones de nombres
- Archivos:     kebab-case (hero.component.ts)
- Clases:       PascalCase (HeroComponent)
- Variables:    camelCase
- Constantes:   UPPER_SNAKE_CASE
- Interfaces:   PascalCase (Producto, Categoria)

### Variables de entorno
- Están en src/environments/environment.ts
- NO hardcodear credenciales de Firebase en componentes
- Usar environment.firebase para la configuración

### Reglas generales
- Un componente = un archivo (no mezclar lógica de negocio en templates)
- Todos los componentes con ChangeDetectionStrategy.OnPush
- Imágenes con NgOptimizedImage cuando sean estáticas
- WhatsApp link: https://wa.me/5491100000000 (número ficticio)
- Google Maps: embed estático (no API)
- No usar NgRx, solo Angular Signals
- Commits en formato: feat:, fix:, refactor:, style:, docs:

### Estado actual del proyecto (actualizar al avanzar)
- [x] Angular 21 generado
- [x] Tailwind CSS v3 configurado
- [x] Firebase conectado (AngularFire)
- [x] Firestore con colecciones categorias y productos
- [x] Estructura de carpetas creada
- [ ] Componentes desarrollados
- [ ] Deploy en Firebase Hosting