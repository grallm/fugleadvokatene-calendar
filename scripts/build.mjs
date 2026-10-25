import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('site', 'dist', { recursive: true });
let html = await readFile('dist/index.html', 'utf8');
for (const file of ['style.css', 'content.js', 'app.js', 'config.js', 'payment.css', 'payment.js', 'bird-compare.css', 'bird-compare.js']) {
  const hash = createHash('sha256').update(await readFile('dist/' + file)).digest('hex').slice(0, 12);
  html = html.replace(/(src|href)="([^"?]+)(?:\?[^"]*)?"/g, (match, attr, name) => name === file ? `${attr}="${file}?v=${hash}"` : match);
}
await writeFile('dist/index.html', html);
console.log('Built calendar into dist/');
