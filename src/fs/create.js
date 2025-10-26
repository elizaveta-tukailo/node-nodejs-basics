import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const create = async () => {
    const fileContent = "I am fresh and young";
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, "files", "fresh.txt");
    
    try {
        await writeFile(pathToFile, fileContent, { flag: 'wx' });
      } catch (err) {
        throw new Error("FS operation failed");
    }
};

await create();