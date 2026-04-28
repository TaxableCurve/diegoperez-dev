# Stack técnico

## Framework: Astro 6
- **Por qué**: SSG por defecto = build súper rápido, HTML mínimo, SEO impecable.
- **Content Collections** para proyectos y blog en Markdown/MDX con tipado.
- **Islands architecture**: JS solo donde se necesita (scroll reveal, menú móvil).

## Estilos: Tailwind CSS v4
- Utility-first, sin CSS suelto.
- Tokens de diseño definidos en `@theme` dentro de `src/styles/global.css`.
- Paleta: fondo `#0c0f14`, superficie `#131720`, acento cyan `#22d3ee`, texto `#dce4f0`.
- Tipografía: Outfit (body) + JetBrains Mono (labels técnicos) vía Google Fonts.

## Internacionalización
- `src/i18n.ts` centraliza todos los textos ES/EN como objeto `ui` tipado.
- `useTranslations(lang)` retorna el objeto del idioma activo.
- Rutas: ES sin prefijo, EN bajo `/en/`.

## Internacionalización
- Astro i18n nativo (built-in desde v4).
- Estrategia: rutas con prefijo `/en/`, default ES sin prefijo.
- Contenido duplicado en archivos `.es.md` y `.en.md` por proyecto/post.

## Contenido
- `src/content/proyectos/*.md` (ES) y `src/content/projects/*.md` (EN).
- `src/content/blog/*.md` con frontmatter tipado vía Zod.

## Form de contacto
- v1: link `mailto:` (cero infra).
- v2: Formspree o Cloudflare Workers + Turnstile (anti-spam).

## Hosting
- **Cloudflare Pages**: gratis, CDN global, build automático desde Git.
- Alternativa: Vercel (también gratis, ligeramente más simple).

## Dominio
- Cloudflare Registrar (precio al costo, sin upsell) o Namecheap.
- Presupuesto: ~10 USD/año.

## Analítica
- Plausible (de pago, privacidad) o Cloudflare Web Analytics (gratis).
- Evitar Google Analytics (cookies, banner GDPR, lentitud).

## Repo
- GitHub público (parte del portafolio en sí mismo).
- Commits limpios, README con stack y decisiones.
