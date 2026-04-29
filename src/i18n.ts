export type Lang = 'es' | 'en';

export const ui = {
  es: {
    hero: {
      label: '// Desarrollador Full-Stack · 6 años en producción',
      heading: ['Disfruto el frontend,', 'vivo el backend.'] as const,
      description:
        'Construyo productos completos con Angular, NestJS y Go — desde la interfaz hasta los servicios en producción. Me entretengo en las dos capas, aunque el backend es el pan de cada día.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contactarme',
      projectsHref: '/proyectos/',
      contactHref: '/contacto/',
      availability: 'Abierto a oportunidades',
    },
    stats: [
      { valor: '6+', label: 'años de experiencia' },
      { valor: '5',  label: 'empresas' },
      { valor: '3',  label: 'stacks dominados' },
      { valor: '1',  label: 'paper publicado' },
    ],
    stack: {
      Frontend:       ['Angular', 'Flutter', 'Tailwind CSS', 'TypeScript'],
      Backend:        ['NestJS', 'Node.js', 'Go'],
      'Base de datos': ['PostgreSQL', 'MongoDB', 'Firebase'],
      DevOps:         ['Cloudflare Pages', 'GitHub Actions', 'Docker'],
    },
    home: {
      about:    { label: '// 01', heading: 'Quién soy' },
      projects: { label: '// 02', heading: 'Proyectos destacados', viewAll: 'Ver todos →' },
      stack:    { label: '// 03', heading: 'Stack' },
      contact:  {
        label: '// 04',
        heading: '¿Hablamos?',
        description: 'Abierto a oportunidades de trabajo remoto, consultoría y proyectos freelance.',
        cta: 'Ir a contacto',
      },
    },
    projectsPage: {
      label:       '// Casos de estudio',
      heading:     'Proyectos',
      description: 'Casos de estudio reales: qué se necesitaba resolver, qué decidí y por qué, y qué resultado tuvo.',
    },
    aboutPage: {
      label:       '// Sobre mí',
      heading:     'Diego Fernando Pérez C.',
      experience:  { label: '// 01', heading: 'Experiencia' },
      education:   { label: '// 02', heading: 'Formación' },
      ctaProjects: 'Ver proyectos',
      ctaContact:  'Contactarme',
    },
    contactPage: {
      label:       '// Contacto',
      heading:     '¿Hablamos?',
      description: 'Abierto a oportunidades de trabajo remoto, consultoría y proyectos freelance. Escríbeme directamente y te respondo en menos de 48 horas.',
    },
  },

  en: {
    hero: {
      label: '// Full-Stack Developer · 6 years in production',
      heading: ['I enjoy the frontend,', 'I live in the backend.'] as const,
      description:
        'I build complete products with Angular, NestJS and Go — from the interface to production services. I work comfortably across both layers, though backend is my daily bread.',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
      projectsHref: '/en/projects/',
      contactHref: '/en/contact/',
      availability: 'Open to opportunities',
    },
    stats: [
      { valor: '6+', label: 'years of experience' },
      { valor: '5',  label: 'companies' },
      { valor: '3',  label: 'stacks mastered' },
      { valor: '1',  label: 'published paper' },
    ],
    stack: {
      Frontend: ['Angular', 'Flutter', 'Tailwind CSS', 'TypeScript'],
      Backend:  ['NestJS', 'Node.js', 'Go'],
      Database: ['PostgreSQL', 'MongoDB', 'Firebase'],
      DevOps:   ['Cloudflare Pages', 'GitHub Actions', 'Docker'],
    },
    home: {
      about:    { label: '// 01', heading: 'Who I am' },
      projects: { label: '// 02', heading: 'Featured projects', viewAll: 'View all →' },
      stack:    { label: '// 03', heading: 'Stack' },
      contact:  {
        label: '// 04',
        heading: "Let's talk",
        description: 'Open to remote work opportunities, consulting and freelance projects.',
        cta: 'Go to contact',
      },
    },
    projectsPage: {
      label:       '// Case studies',
      heading:     'Projects',
      description: 'Real case studies: what needed to be solved, what I decided and why, and what the outcome was.',
    },
    aboutPage: {
      label:       '// About me',
      heading:     'Diego Fernando Pérez C.',
      experience:  { label: '// 01', heading: 'Experience' },
      education:   { label: '// 02', heading: 'Education' },
      ctaProjects: 'View projects',
      ctaContact:  'Get in touch',
    },
    contactPage: {
      label:       '// Contact',
      heading:     "Let's talk",
      description: "Open to remote work opportunities, consulting and freelance projects. Write me directly and I'll get back to you within 48 hours.",
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
