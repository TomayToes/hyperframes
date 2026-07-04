import fs from 'node:fs';
import { execSync } from 'node:child_process';

const css = fs.readFileSync('gf.css', 'utf8');
// Split into @font-face blocks, each preceded by a /* subset */ comment
const blocks = [...css.matchAll(/\/\*\s*([a-z-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g)];
const want = [];
for (const m of blocks) {
  const subset = m[1];
  if (subset !== 'latin') continue; // latin only
  const body = m[2];
  const fam = /font-family:\s*'([^']+)'/.exec(body)[1];
  const wght = /font-weight:\s*(\d+)/.exec(body)[1];
  const url = /url\((https:[^)]+\.woff2)\)/.exec(body)[1];
  want.push({ fam, wght, url });
}
console.log('latin faces:', want.map((w) => `${w.fam} ${w.wght}`).join(', '));

let out = '/* CEMESA brand fonts — latin subset, base64-embedded for deterministic offline render */\n';
for (const w of want) {
  const file = `${w.fam.replace(/\s+/g, '')}-${w.wght}.woff2`;
  execSync(`curl -sS -A "Mozilla/5.0 Chrome/120.0" "${w.url}" -o "${file}" --max-time 40`);
  const b = fs.readFileSync(file);
  const b64 = b.toString('base64');
  console.log(`${file}: ${b.length} bytes`);
  out += `@font-face{font-family:'${w.fam}';font-style:normal;font-weight:${w.wght};font-display:block;src:url(data:font/woff2;base64,${b64}) format('woff2');}\n`;
}
fs.writeFileSync('faces.css', out);
console.log('wrote faces.css', fs.statSync('faces.css').size, 'bytes');
