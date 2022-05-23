const fs = require('fs');
const path = require('path');
const {stdout} = require('process');
let dir = path.join(__dirname, 'secret-folder');

async function readDir(dir) {
  try {
    fs.readdir(dir, (error, items) => {
      for (let i = 0; i < items.length; i++) {
        let file = `${dir}/${items[i]}`;
        let fileName = `${items[i]}`;

        fs.stat(file, (error, stats) => {
          let fileSize = stats["size"];
          stdout.write(`${fileName.slice(0, fileName.lastIndexOf('.'))} - ${fileName.slice(fileName.lastIndexOf('.'))} - ${Math.round(fileSize / 1024)}kb\n`);
        });
      }
    });
  } catch (error) {
    console.error('Error: ', error.message);
  }
}
readDir(dir);
