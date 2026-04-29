// Genera public/og-default.png (1200x630) con el diseño del sitio (cyan #22d3ee, fondo #0c0f14)
// Ejecutar desde la raíz: node scripts/generate-og.mjs

import { writeFileSync } from 'fs';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const require = createRequire(import.meta.url);
const sharp = require('../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js');
const __dirname = dirname(fileURLToPath(import.meta.url));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="32%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#0c0f14" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#22d3ee" fill-opacity="0.09"/>
    </pattern>
  </defs>

  <!-- Fondo base -->
  <rect width="1200" height="630" fill="#0c0f14"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Barra izquierda -->
  <rect x="0" y="0" width="4" height="630" fill="#22d3ee"/>

  <!-- Label superior -->
  <text x="80" y="110" font-family="monospace" font-size="13" fill="#22d3ee" letter-spacing="3">PORTFOLIO · FULL-STACK DEVELOPER</text>

  <!-- Nombre -->
  <text x="80" y="240" font-family="system-ui, -apple-system, sans-serif"
    font-size="62" font-weight="700" fill="#dce4f0" letter-spacing="-1">Diego Fernando Perez</text>

  <!-- Tagline -->
  <text x="80" y="298" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" xml:space="preserve"><tspan fill="#dce4f0">Disfruto el </tspan><tspan fill="#22d3ee">frontend</tspan><tspan fill="#dce4f0">.</tspan></text>
  <text x="80" y="332" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" xml:space="preserve"><tspan fill="#dce4f0">Vivo el </tspan><tspan fill="#22d3ee">backend</tspan><tspan fill="#dce4f0">.</tspan></text>

  <!-- Separador -->
  <rect x="80" y="368" width="420" height="1" fill="#1e2535"/>

  <!-- Columnas de stack -->
  <!-- Columna Frontend -->
  <text x="80" y="398" font-family="monospace" font-size="11" fill="#22d3ee" letter-spacing="2">FRONTEND</text>
  <text x="80" y="424" font-family="monospace" font-size="15" fill="#dce4f0">Angular</text>
  <text x="80" y="450" font-family="monospace" font-size="15" fill="#dce4f0">Flutter</text>

  <!-- Divisor vertical entre columnas -->
  <rect x="210" y="385" width="1" height="78" fill="#1e2535"/>

  <!-- Columna Backend -->
  <text x="230" y="398" font-family="monospace" font-size="11" fill="#22d3ee" letter-spacing="2">BACKEND</text>
  <text x="230" y="424" font-family="monospace" font-size="15" fill="#dce4f0">NestJS</text>
  <text x="230" y="450" font-family="monospace" font-size="15" fill="#dce4f0">Go</text>

  <!-- URL -->
  <text x="80" y="556" font-family="monospace" font-size="16" fill="#22d3ee">diegoperez.co</text>

  <!-- Decoracion derecha: </> centrado en zona derecha -->
  <text x="920" y="440" font-family="monospace" font-size="200" font-weight="700"
    fill="#22d3ee" fill-opacity="0.11" text-anchor="middle">&lt;/&gt;</text>
</svg>`;

const svgPath = join(__dirname, '../public/og-default.svg');
const pngPath = join(__dirname, '../public/og-default.png');

writeFileSync(svgPath, svg);

await sharp(Buffer.from(svg)).png().toFile(pngPath);

console.log('og-default.svg y og-default.png generados (1200x630)');
