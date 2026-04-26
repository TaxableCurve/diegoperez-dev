# CLAUDE.md

Guía operativa para Claude Code en este repositorio. Léeme antes de proponer cambios.

## Qué es este proyecto

Portafolio personal bilingüe (ES/EN) de Diego Fernando Pérez. Es **prueba de competencia técnica** además de carta de presentación: el código del sitio cuenta tanto como el contenido.

**Estado actual: v0.1 — planificación.** No hay código aún. Toda decisión vive en `docs/`. Antes de generar andamiaje, confirma con el usuario que ya estamos en v0.2 del roadmap.

## Documentos fuente de verdad

Lee siempre antes de actuar:

- `docs/01-vision.md` — objetivo, audiencia, tono.
- `docs/02-estructura.md` — rutas y anatomía de páginas.
- `docs/03-stack-tecnico.md` — Astro 5 + Tailwind v4 + Cloudflare Pages.
- `docs/04-flujo-contenido.md` — schemas de frontmatter y proceso editorial.
- `docs/05-roadmap.md` — qué corresponde hacer ahora.

Si una petición contradice los docs, **no la implementes en silencio**: avisa la discrepancia y pregunta si actualizamos los docs primero.

## Stack (resumen ejecutable)

- **Astro 5** SSG, islands solo donde haga falta JS.
- **Tailwind CSS v4** (sin CSS suelto; tokens en config o CSS vars).
- **Astro i18n nativo**, default ES sin prefijo, EN bajo `/en/`.
- **Content Collections** con Zod para `proyectos/` (ES) y `projects/` (EN), y `blog/`.
- **Cloudflare Pages** para deploy. **GitHub** público.
- Form contacto v1: `mailto:`. v2: Cloudflare Workers + Turnstile.

No introduzcas dependencias fuera de este stack sin justificarlo y obtener confirmación.

## Convenciones de contenido

- Slugs en kebab-case, sin acentos, **estables tras publicación**.
- Cada caso de estudio existe en paralelo `src/content/proyectos/<slug>.md` y `src/content/projects/<slug>.md`. Si falta la traducción EN, fallback a ES con aviso.
- Frontmatter exacto al schema de `docs/04-flujo-contenido.md`. Si falta un campo requerido, pregunta antes de inventar valores.
- Plantilla obligatoria de caso: Contexto → Problema → Decisiones → Implementación → Resultado → Aprendizajes.

## Cómo trabajar

- **Pregunta antes de andar a ciegas** cuando falten: nombre del proyecto, dominio, los 3 proyectos iniciales, datos personales del usuario.
- **Avanza por hitos del roadmap**, no saltes versiones (no añadas blog/analytics si estamos en v0.3).
- **Commits limpios**: el repo es parte del portafolio. Mensajes descriptivos, scope acotado, sin commits "wip".
- No uses emojis en código ni en docs salvo que el usuario lo pida.
- No crees archivos `.md` nuevos a menos que lo pida explícitamente; trabaja sobre los existentes.

## Comandos esperados (a partir de v0.2)

Una vez creado el proyecto con `npm create astro@latest`, los scripts canónicos serán:

- `pnpm install` — instala dependencias.
- `pnpm dev` — servidor local en `http://localhost:4321`.
- `pnpm build` — build de producción a `dist/`.
- `pnpm preview` — sirve el build para verificar antes de deploy.
- `pnpm astro check` — typecheck de Astro + content collections (Zod).
- `pnpm astro add tailwind` — integración inicial de Tailwind v4 (solo una vez).

Antes de dar una tarea por terminada: corre `pnpm build` y `pnpm astro check`. Si tocas UI, abre `pnpm dev` y verifica visualmente la ruta afectada (ES y EN).

Deploy: lo gestiona Cloudflare Pages al hacer `git push` a la rama principal. No corras deploys manualmente desde local.

## Calidad mínima al hacer deploy

- Lighthouse 95+ en Performance, Accessibility, Best Practices, SEO.
- Sitemap + robots.txt + meta tags + OG images.
- Sin errores de hidratación; islands solo donde realmente haya interacción.
- HTML semántico y accesible (lang correcto por idioma, jerarquía de headings, alt en imágenes).

## Idioma de comunicación

El usuario escribe en español. Responde en español salvo que pida lo contrario. El **contenido del sitio** sí es bilingüe: nombres de archivos/rutas EN para la versión inglesa según `docs/02-estructura.md`.
