/**
 * Readable and Writeable Stream
 */

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');
readStream.on('data', (chunk) => {
    console.log(chunk);
});
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});