import { parentPort } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.on('message', n => {
        try {
            const calcResult = nthFibonacci(n);
            parentPort.postMessage(calcResult);
        } catch (error) {
            parentPort.postMessage(null);
        }
    });
};

sendResult();