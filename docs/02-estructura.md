# Estructura del sitio

## Rutas (bilingüe ES/EN)

Estrategia: prefijo de idioma en URL. Español por defecto.

```
/                       → home en español
/en/                    → home en inglés
/proyectos/             → listado de casos de estudio (ES)
/en/projects/           → listado (EN)
/proyectos/[slug]/      → caso individual
/en/projects/[slug]/
/sobre-mi/              → bio + experiencia
/en/about/
/blog/                  → opcional v1, listo para v2
/en/blog/
/contacto/              → form de contacto
/en/contact/
```

## Secciones de la home

1. **Hero**: nombre + pitch corto (1-2 líneas) + CTA "Ver proyectos" / "Contactarme".
2. **Quién soy en 30s**: párrafo breve sobre el perfil rotativo.
3. **Proyectos destacados**: 3 cards con link al caso completo.
4. **Stack**: agrupado por área (frontend / backend / DB / DevOps), no logos sueltos.
5. **Contacto rápido**: email + redes.

## Anatomía de un caso de estudio

Cada proyecto en `/proyectos/[slug]/` debe responder:

1. **Contexto**: empresa/cliente (anonimizado si aplica), rol, duración.
2. **Problema**: qué se necesitaba resolver, restricciones.
3. **Decisiones técnicas**: stack elegido y por qué (no solo qué).
4. **Implementación**: 2-3 detalles concretos interesantes (no tutorial).
5. **Resultado**: métrica medible (performance, usuarios, tiempo ahorrado, etc.).
6. **Aprendizajes**: qué haría diferente hoy.

Recursos: screenshots/diagrama, link a demo si existe, link a repo si es público.
