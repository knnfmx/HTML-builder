const fs = require('fs');
const path = require('path');
let dir = path.join(__dirname, 'files');
console.log(dir);

let dirForCopy = path.join(__dirname, 'files-copy/');

fs.mkdir(dirForCopy, {recursive: true}, error => error);
async function makeCopy(dir) {
  fs.readdir(dir, (error, files) => {
    files.forEach(file => {
      fs.copyFile(`${dir}/${file}`, `${dirForCopy}${file}`, error => error);
    })
  });
}
makeCopy(dir);