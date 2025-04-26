import { cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    try {
        await cp(`${__dirname}/files`, `${__dirname}/files_copy`, {
            errorOnExist: true,
            force: false,
            recursive: true,
        });
    } catch (error) {
        if (error?.code === "ENOENT" || error?.code === "ERR_FS_CP_EEXIST") {
            throw new Error("FS operation failed");
        } else {
            throw new Error(error);
        }
    }
};

await copy();
