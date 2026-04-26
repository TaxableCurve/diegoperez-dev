// Genera public/og-default.png a partir de un SVG
// Ejecutar: node scripts/generate-og.mjs

import { writeFileSync } from 'fs';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0f1a"/>
      <stop offset="100%" style="stop-color:#1e1b4b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#818cf8"/>
    </linearGradient>
  </defs>

  <!-- Fondo -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Línea de acento superior -->
  <rect x="80" y="80" width="120" height="4" rx="2" fill="url(#accent)"/>

  <!-- Nombre -->
  <text x="80" y="280" font-family="system-ui, -apple-system, sans-serif"
    font-size="72" font-weight="700" fill="white" letter-spacing="-1">
    Diego Fernando Pérez
  </text>

  <!-- Título -->
  <text x="80" y="360" font-family="system-ui, -apple-system, sans-serif"
    font-size="36" font-weight="400" fill="#a5b4fc">
    Software Engineer · Full-Stack
  </text>

  <!-- Stack pills -->
  <rect x="80" y="420" width="90" height="36" rx="18" fill="#312e81" opacity="0.8"/>
  <text x="125" y="444" font-family="system-ui, sans-serif" font-size="16" fill="#c7d2fe" text-anchor="middle">Go</text>

  <rect x="184" y="420" width="130" height="36" rx="18" fill="#312e81" opacity="0.8"/>
  <text x="249" y="444" font-family="system-ui, sans-serif" font-size="16" fill="#c7d2fe" text-anchor="middle">Angular</text>

  <rect x="328" y="420" width="130" height="36" rx="18" fill="#312e81" opacity="0.8"/>
  <text x="393" y="444" font-family="system-ui, sans-serif" font-size="16" fill="#c7d2fe" text-anchor="middle">NestJS</text>

  <rect x="472" y="420" width="130" height="36" rx="18" fill="#312e81" opacity="0.8"/>
  <text x="537" y="444" font-family="system-ui, sans-serif" font-size="16" fill="#c7d2fe" text-anchor="middle">Flutter</text>

  <!-- URL -->
  <text x="80" y="550" font-family="system-ui, sans-serif" font-size="24" fill="#4f46e5">
    diegoperez.dev
  </text>

  <!-- Decoración geométrica derecha -->
  <circle cx="1050" cy="315" r="180" fill="none" stroke="#4f46e5" stroke-width="1" opacity="0.3"/>
  <circle cx="1050" cy="315" r="130" fill="none" stroke="#6366f1" stroke-width="1" opacity="0.2"/>
  <circle cx="1050" cy="315" r="80" fill="#4f46e5" opacity="0.1"/>
</svg>`;

writeFileSync('public/og-default.svg', svg);
console.log('SVG generado en public/og-default.svg');
console.log('Convierte a PNG con: npx sharp-cli public/og-default.svg -o public/og-default.png');
