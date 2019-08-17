/**
 * Pipe and Pipe Chaining
 */

const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
// readStream.pipe(writeStream);
// readStream.pipe(gzip).pipe(writeStream);
readStream.pipe(gunzip).pipe(writeStream);