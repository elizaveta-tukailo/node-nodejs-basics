import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
    const reversedSteam = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            callback(null, reversed + '\n');
        }
    });
    try {
        await pipeline(process.stdin, reversedSteam, process.stdout, { end: false });
    } catch (error) {
        console.log(error);
    }
};

await transform();