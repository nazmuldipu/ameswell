'use strict';
import { buildCSS } from './postcss.js';
import { 
    getPageAssets,
    PAGES_DIR
} from './lib.js';
import { extname, basename } from 'path';

const outputDir = new URL('../build', import.meta.url);

const inputPaths = getPageAssets(PAGES_DIR, (fileName) => extname(fileName) === '.css').flat();

try {
    const depPaths = await buildCSS(inputPaths, outputDir.pathname, basename(PAGES_DIR.pathname));
}
catch (e) {
    console.error(`Error in building CSS: ${e}`);
    process.exit(1);
}