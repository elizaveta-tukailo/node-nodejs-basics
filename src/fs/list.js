import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    
    try {
        const dirFileNames = await readdir(`${__dirname}/files/`);
        console.debug(dirFileNames);
    } catch (error) {
        if (error?.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw new Error(error);
        }
    }
};

await list();