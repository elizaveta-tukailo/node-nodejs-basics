import { fork } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToScript = path.join(__dirname, "files", "script.js");
    fork(pathToScript, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);