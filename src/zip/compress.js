import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
    const destinationPath = path.join(__dirname, "files", "archive.gz");
    try {
        const gzip = createGzip();
        const source = createReadStream(sourcePath);
        const destination = createWriteStream(destinationPath);
        await pipeline(source, gzip, destination);
    } catch (error) {
        console.log(error);
    }
};

await compress();