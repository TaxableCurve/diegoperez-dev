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
    <radialGradient id="glow" cx="35%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#0c0f14" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#22d3ee" fill-opacity="0.09"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0c0f14"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <rect x="0" y="0" width="4" height="630" fill="#22d3ee"/>

  <text x="80" y="118" font-family="monospace" font-size="13" font-weight="400"
    fill="#22d3ee" letter-spacing="3">PORTFOLIO · FULL-STACK DEVELOPER</text>

  <text x="80" y="256" font-family="system-ui, -apple-system, sans-serif"
    font-size="64" font-weight="700" fill="#dce4f0" letter-spacing="-1">Diego Fernando Perez</text>

  <text x="80" y="322" font-family="system-ui, -apple-system, sans-serif"
    font-size="26" font-weight="300" fill="#8a9bb5">Disfruto el frontend.</text>
  <text x="80" y="362" font-family="system-ui, -apple-system, sans-serif"
    font-size="26" font-weight="300" fill="#8a9bb5">Vivo el backend.</text>

  <rect x="80" y="400" width="500" height="1" fill="#1e2535"/>

  <rect x="80" y="425" width="96" height="30" rx="5" fill="#131720" stroke="#22d3ee" stroke-width="1" stroke-opacity="0.5"/>
  <text x="128" y="445" font-family="monospace" font-size="13" fill="#22d3ee" text-anchor="middle">Angular</text>

  <rect x="188" y="425" width="82" height="30" rx="5" fill="#131720" stroke="#1e2535" stroke-width="1"/>
  <text x="229" y="445" font-family="monospace" font-size="13" fill="#8a9bb5" text-anchor="middle">NestJS</text>

  <rect x="282" y="425" width="60" height="30" rx="5" fill="#131720" stroke="#1e2535" stroke-width="1"/>
  <text x="312" y="445" font-family="monospace" font-size="13" fill="#8a9bb5" text-anchor="middle">Go</text>

  <rect x="354" y="425" width="84" height="30" rx="5" fill="#131720" stroke="#1e2535" stroke-width="1"/>
  <text x="396" y="445" font-family="monospace" font-size="13" fill="#8a9bb5" text-anchor="middle">Flutter</text>

  <text x="80" y="556" font-family="monospace" font-size="17" fill="#22d3ee">diegoperez.dev</text>

  <circle cx="1000" cy="315" r="200" fill="none" stroke="#22d3ee" stroke-width="1" opacity="0.05"/>
  <circle cx="1000" cy="315" r="140" fill="none" stroke="#22d3ee" stroke-width="1" opacity="0.09"/>
  <circle cx="1000" cy="315" r="80" fill="none" stroke="#22d3ee" stroke-width="1" opacity="0.14"/>
  <circle cx="1000" cy="315" r="28" fill="#22d3ee" opacity="0.07"/>
  <line x1="1000" y1="280" x2="1000" y2="350" stroke="#22d3ee" stroke-width="1" opacity="0.18"/>
  <line x1="965" y1="315" x2="1035" y2="315" stroke="#22d3ee" stroke-width="1" opacity="0.18"/>
</svg>`;

const svgPath = join(__dirname, '../public/og-default.svg');
const pngPath = join(__dirname, '../public/og-default.png');

writeFileSync(svgPath, svg);

await sharp(Buffer.from(svg)).png().toFile(pngPath);

console.log('og-default.svg y og-default.png generados (1200x630)');
