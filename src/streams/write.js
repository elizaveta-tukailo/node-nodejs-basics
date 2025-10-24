import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, "files", "fileToWrite.txt");
    try {
        const writeStream = createWriteStream(filePath);
        await pipeline(process.stdin, writeStream);
    } catch (error) {
        console.log(error);
    }

};

await write();