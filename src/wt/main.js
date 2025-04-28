import { Worker } from 'worker_threads';
import { cpus } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const cpuCoreCount = cpus().length;

    const workers = [];
    for (let i = 0; i < cpuCoreCount; i++) {
        workers.push(new Promise(resolve => {
            const worker = new Worker(path.join(__dirname, 'worker.js'));
    
            worker.postMessage(10 + i);
    
            worker.on('message', data => {
                resolve({ status: 'resolved', data });
                worker.terminate();
            });
            worker.on('error', () => resolve({ status: 'error', data: null }));
            worker.on('exit', code => code !== 0 && resolve({ status: 'error', data: null }));
        }));
    }
    
    const results = await Promise.all(workers);
    console.log(results);
};

performCalculations();