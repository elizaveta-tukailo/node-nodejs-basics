import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    try {
        const fileContent = await readFile(`${__dirname}/files/fileToRead.txt`, { encoding: "utf8" });
        console.debug(fileContent);
    } catch (error) {
        if (error?.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw new Error(error);
        }
    }
};

await read();