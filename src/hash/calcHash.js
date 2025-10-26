import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const fileName = 'fileToCalculateHashFor.txt';
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, "files", fileName);

    try {
        const stream = createReadStream(filePath);
        await pipeline(stream, hash);
        console.log(hash.digest('hex'));
    } catch (error) {
        console.log('error', error);
    }
};

await calculateHash();