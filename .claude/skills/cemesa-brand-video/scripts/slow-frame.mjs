import fs from 'node:fs';

// Slow a frame's animation uniformly by STRETCH (>1) without re-building it:
//  - scale every clip's data-start / data-duration by STRETCH (so clips stay mounted the whole time)
//  - wrap the built timeline in a paused master and set the inner timeScale to 1/STRETCH
//    (a nested child's timeScale stretches it under the engine's master.seek()).
const [file, stretchStr] = process.argv.slice(2);
const S = Number(stretchStr);
if (!file || !Number.isFinite(S) || S <= 0) { console.error('usage: slow-frame.mjs <file> <stretch>'); process.exit(1); }

let html = fs.readFileSync(file, 'utf8');
const r3 = (n) => +(n).toFixed(4);

let starts = 0, durs = 0;
html = html.replace(/data-start="([0-9.]+)"/g, (m, a) => { starts++; return `data-start="${r3(Number(a) * S)}"`; });
html = html.replace(/data-duration="([0-9.]+)"/g, (m, a) => { durs++; return `data-duration="${r3(Number(a) * S)}"`; });

const idm = /window\.__timelines\["([^"]+)"\] = tl;/.exec(html);
if (!idm) { console.error(`${file}: could not find timeline registration`); process.exit(1); }
const id = idm[1];
const wrap =
  `tl.timeScale(${r3(1 / S)});\n` +
  `      var __master = gsap.timeline({ paused: true });\n` +
  `      __master.add(tl, 0);\n` +
  `      window.__timelines["${id}"] = __master;`;
html = html.replace(`window.__timelines["${id}"] = tl;`, wrap);

fs.writeFileSync(file, html);
console.log(`${file.split('/').pop()}: ×${S}  (${starts} data-start, ${durs} data-duration scaled; inner timeScale ${r3(1 / S)})`);
