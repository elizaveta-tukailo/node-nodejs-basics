import { rename as renameFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), "/files");

    try {
       await renameFile(`${__dirname}/wrongFilename.txt`, `${__dirname}/properFilename.md`); 
    } catch (error) {
        if (error?.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw new Error(error);
        }
    }
};

await rename();