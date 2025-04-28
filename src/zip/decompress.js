import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, "files", "archive.gz");
    const decompressPath = path.join(__dirname, "files", "fileToCompress.txt");
    try {
        const gunzipStream = createGunzip();
        const source = createReadStream(sourcePath);
        const destination = createWriteStream(decompressPath);
        await pipeline(source, gunzipStream, destination);
    } catch (error) {
        console.log(error);
    }
};

await decompress();