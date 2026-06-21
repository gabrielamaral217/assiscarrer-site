// Otimiza as imagens da lp-apartamento: resize + WebP + JPEG fallback.
// Saída em images/portfolio/opt/{name}.{webp,jpg}.
// Roda: npx -y sharp@0.34 -- node scripts/optimize-lp-images.mjs
// (ou usa sharp já instalado se existir)

import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'images/portfolio';
const OUT = 'images/portfolio/opt';

// Largura máxima 1400px cobre retina 3x em telas de até ~470px CSS.
// Pra LP que renderiza imagens em ~390-414px CSS, isso é gordura suficiente.
const TARGETS = [
  { file: 'case-enjoy-aquarius-sala.jpg', width: 1400, q: 82 },
  { file: 'case-celebration-sala.jpg',    width: 1400, q: 82 },
  { file: 'case-believe-jantar.jpg',      width: 1400, q: 82 },
  { file: 'case-living-masculino.jpg',    width: 1200, q: 82 },
  { file: 'hero-residencial-integrado.jpg', width: 1400, q: 84 }, // hero precisa ser mais nítido
];

await mkdir(OUT, { recursive: true });

const fmt = n => (n / 1024).toFixed(0) + ' KB';

console.log('🖼  Otimizando ' + TARGETS.length + ' imagens...\n');
let savedTotal = 0;
for (const t of TARGETS) {
  const src = path.join(SRC, t.file);
  const base = t.file.replace(/\.[^.]+$/, '');
  const outWebp = path.join(OUT, base + '.webp');
  const outJpg  = path.join(OUT, base + '.jpg');

  const orig = (await stat(src)).size;

  const pipeline = sharp(src).resize({ width: t.width, withoutEnlargement: true });
  await pipeline.clone().webp({ quality: t.q, effort: 5 }).toFile(outWebp);
  await pipeline.clone().jpeg({ quality: t.q, mozjpeg: true, progressive: true }).toFile(outJpg);

  const sWebp = (await stat(outWebp)).size;
  const sJpg  = (await stat(outJpg)).size;
  const saved = orig - sWebp;
  savedTotal += saved;
  console.log(
    `${t.file.padEnd(36)}  orig ${fmt(orig).padStart(8)}  →  webp ${fmt(sWebp).padStart(7)}  jpg ${fmt(sJpg).padStart(7)}  (-${Math.round((1 - sWebp/orig) * 100)}%)`
  );
}
console.log('\nTotal economizado (em WebP): ' + (savedTotal / 1024 / 1024).toFixed(1) + ' MB');
