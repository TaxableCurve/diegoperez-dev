# Roadmap

## v0.1 — Planificación ✓
- [x] Definir visión y audiencia.
- [x] Definir estructura de rutas.
- [x] Elegir stack técnico.
- [x] Definir flujo de contenido.
- [x] Elegir nombre + dominio → `diegoperez.dev`
- [x] Definir 3 proyectos a documentar → ver `docs/04-flujo-contenido.md`

## v0.2 — Andamiaje ✓
- [x] Astro 6 + plantilla mínima con pnpm.
- [x] Configurar Tailwind CSS v4 vía `@tailwindcss/vite`.
- [x] Configurar i18n nativo (ES default, `/en/` para EN).
- [x] Configurar Content Collections con Zod (nueva Content Layer API).
- [x] Layout base + Header con nav + Footer.
- [x] Repo público en GitHub (`TaxableCurve/diegoperez-dev`).

## v0.3 — Contenido v1 ✓
- [x] Home (ES + EN) con hero, pitch, proyectos destacados, stack y CTA.
- [x] Página "Sobre mí" (ES + EN) con experiencia real y formación.
- [x] Página de listado de proyectos (ES + EN).
- [x] Template de caso de estudio con prose (ES + EN).
- [x] 3 casos de estudio completos en borrador (ES + EN).
- [x] Página de contacto con email, GitHub y LinkedIn (ES + EN).
- [x] Resumen profesional definitivo.
- [x] Fix: selector de idioma con mapa de rutas ES ↔ EN.

## v0.4 — Pulido y deploy ✓
- [x] SEO: sitemap, robots.txt, meta tags, canonical.
- [x] Lighthouse 100/100/100/100 desktop, 98 mobile.
- [x] Deploy a Cloudflare Pages → `diegoperez-dev.pages.dev`
- [ ] Conectar dominio `diegoperez.dev` (pendiente compra).
- [ ] Verificar en Google Search Console (pendiente dominio).

## v0.5 — Rediseño visual ✓
- [x] Tema oscuro completo (fondo `#0c0f14`, acento cyan `#22d3ee`).
- [x] Tipografía Outfit + JetBrains Mono.
- [x] Contraste de texto corregido (accessibility 100).
- [x] Hero full-width con dot grid, glow centrado y animaciones fade-up.
- [x] Badge "Abierto a oportunidades" + links GitHub/LinkedIn en hero.
- [x] Sección de stats (6+, 5, 3, 1) en home y sobre-mí.
- [x] Animaciones reveal al scroll con IntersectionObserver.
- [x] Números decorativos en tarjetas de proyectos.
- [x] Headers con dot grid y glow en todas las páginas internas.
- [x] Slug de proyectos: meta grid, borde cyan en h2, CTA final.
- [x] Componentes reutilizables: Hero, ProjectCard, StatGrid.
- [x] Sistema i18n centralizado en `src/i18n.ts`.
- [x] Textos actualizados: perfil honesto con Angular, NestJS y Go.

## v1.0 — Lanzamiento
- [x] 3 casos de estudio revisados y publicados.
- [x] Rediseño visual completo desplegado en producción.
- [ ] OG image real (nombre, stack, fondo oscuro).
- [ ] Foto personal en página sobre-mí.
- [ ] CV descargable en página de contacto.
- [ ] Métricas concretas en casos de estudio (números, volumen, tiempo).
- [ ] Anuncio en LinkedIn.
- [ ] Añadir link en GitHub profile y firma de email.
- [ ] Conectar dominio `diegoperez.dev`.

## v1.1+ (futuro)
- [ ] Referencia a Claude en footer o página about.
- [ ] Blog con MDX.
- [ ] Form de contacto con backend (Cloudflare Workers + Turnstile).
- [ ] Analítica (Cloudflare Web Analytics — gratis, sin cookies).
- [ ] RSS feed.
