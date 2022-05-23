const fs = require('fs');
const path = require('path');
const {stdin, stdout} = process;
let dir = path.dirname(__filename);
let file = 'text.txt';
stdout.write('Give me a message:\n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  fs.createWriteStream(`${dir}/${file}`);.write(data);
});

if(process.on('SIGINT', () => {
  process.exit();
}));
process.on('exit', (code) => {
  if (code === 0) {
    stdout.write('See ya!');
  } else {
    stdout.write(`error: ${code}`);
  }
});