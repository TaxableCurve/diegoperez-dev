# Flujo de contenido

## Cómo se publica un caso de estudio nuevo

1. Crear `src/content/proyectos/mi-proyecto.md` (versión ES).
2. Crear `src/content/projects/my-project.md` (versión EN).
3. Llenar frontmatter (ver schema abajo).
4. Escribir el caso siguiendo la plantilla de `02-estructura.md`.
5. Añadir imágenes en `src/assets/proyectos/mi-proyecto/`.
6. `git commit && git push` → Cloudflare Pages build & deploy automático.

## Schema de frontmatter (proyectos)

```yaml
---
title: "Nombre del proyecto"
slug: "mi-proyecto"          # opcional, derivado del filename
summary: "1 línea, máx 140 caracteres"
role: "Full-stack" | "Frontend" | "Backend" | "Database"
stack: ["Astro", "Postgres", "Node"]
client: "Empresa X" | "Personal" | "Anónimo"
year: 2025
featured: true               # aparece en home
order: 1                     # orden si featured
demoUrl: "https://..."       # opcional
repoUrl: "https://..."       # opcional
cover: "./cover.png"
draft: false
---
```

## Schema de frontmatter (blog)

```yaml
---
title: "..."
description: "..."
publishedAt: 2026-04-25
updatedAt: 2026-05-01        # opcional
tags: ["postgres", "performance"]
draft: false
---
```

## Convención de slugs
- Kebab-case, sin acentos.
- Stable: una vez publicado, no cambiar (rompe SEO y links).

## Idiomas en paralelo
- No es obligatorio publicar EN al mismo tiempo que ES, pero el sitio debe degradar bien:
  - Si falta la versión EN → fallback a ES con aviso "Disponible solo en español".

## Plan de contenido inicial (v1)

### Proyectos confirmados

#### 1. App de navegación universitaria
- **Slug:** `navegacion-universitaria` / `university-navigation`
- **Rol:** Desarrollador principal (tesis de grado)
- **Stack:** Flutter, Google Maps SDK, imágenes 360°
- **Perfil:** Frontend / Mobile
- **Historia:** GPS tiene limitaciones en espacios cerrados → rutas estáticas desde entradas hasta edificios, áreas comunes, puntos de encuentro con imágenes 360°.
- **Confidencialidad:** Ninguna. Demo en dominio universitario (usar capturas/video en lugar de link directo).
- **Repo:** No público.

#### 2. Plataforma de métricas en tiempo real
- **Slug:** `metricas-tiempo-real` / `realtime-metrics`
- **Rol:** Desarrollador full-stack
- **Stack:** Angular, Node.js, Firebase (Realtime Database)
- **Perfil:** Frontend + Backend
- **Historia:** Máquina industrial transmite datos a Firebase → dashboard que permite al usuario monitorear métricas en tiempo real.
- **Confidencialidad:** NDA. Presentar como "cliente del sector industrial", sin nombre ni datos propietarios.
- **Repo:** No público.

#### 3. Automatización de indemnizaciones agrícolas
- **Slug:** `automatizacion-indemnizaciones` / `agricultural-claims-automation`
- **Rol:** Desarrollador full-stack
- **Stack:** Angular, Spring Boot, PostgreSQL
- **Perfil:** Backend + impacto de negocio
- **Historia:** Proceso 100% manual (una persona leyendo cada Excel, comparando datos a mano) → sistema que carga el archivo, llama endpoints, cruza parámetros de lluvia/sequía por temporada y determina automáticamente si cada caficultor debe ser indemnizado. Impacto directo en velocidad y eliminación de errores humanos.
- **Confidencialidad:** NDA. Presentar como "cliente del sector agroindustrial / seguros colectivos", sin nombre ni lógica propietaria.
- **Repo:** No público.

### Nota sobre NDA
Todos los proyectos de empresa tienen contrato de confidencialidad. Regla a seguir:
- No mencionar nombre del cliente.
- Describir sector, rol propio y decisiones técnicas — no lógica de negocio propietaria.
- No publicar código fuente ni capturas con datos reales.

1-2 artículos de blog opcionales para v1.1.
