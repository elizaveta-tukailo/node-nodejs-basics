import { unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    try {
        await unlink(`${__dirname}/files/fileToRemove.txt`);
    } catch (error) {
        if (error?.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw new Error(error);
        }          
    }
};

await remove();