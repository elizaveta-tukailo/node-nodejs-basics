import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, "files", "fileToRead.txt");

    const fileStream = createReadStream(filePath, { encoding: 'utf8' });
    try {
        await pipeline(
            fileStream,
            process.stdout
        );
    } catch (error) {
        console.log(error);
    }
};

await read();