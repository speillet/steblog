import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL('index.html', root), new URL('index.html', output));
await cp(new URL('assets/', root), new URL('assets/', output), { recursive: true });
await writeFile(new URL('.nojekyll', output), '');
console.log('Built portfolio in dist/');
