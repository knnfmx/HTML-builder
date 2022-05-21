const fs = require('fs');
const path = require('path');
const string = path.dirname(__filename);
console.log(string);

const stream = fs.createReadStream(`${string}`+ '/text.txt', 'utf8');
stream.on('data', (data) => console.log(data));
stream.on('error', (err) => console.log(`Err: ${err}`));