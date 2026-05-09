import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'static', 'favicon.svg');
const out = path.join(root, 'static');

const svg = await readFile(src);
const bg = '#0B0B0B';

// Render the logo padded onto a dark square so it stays legible on light backgrounds (tabs, home screens).
async function render(size, file, padding = 0.18) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await sharp(svg).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: bg }
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(path.join(out, file));
  console.log('wrote', file);
}

await render(180, 'apple-touch-icon.png');
await render(192, 'icon-192.png');
await render(512, 'icon-512.png');
await render(32, 'favicon-32.png', 0.1);
await render(16, 'favicon-16.png', 0.1);

const ico = await pngToIco([path.join(out, 'favicon-16.png'), path.join(out, 'favicon-32.png')]);
await writeFile(path.join(out, 'favicon.ico'), ico);
console.log('wrote favicon.ico');
