const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');


async function mergeBundle() {
  try {
    fs.promises.readdir(dir, {withFileTypes: true})
      .then(files => {
        files.forEach(file => {
          if(file.isFile() && path.extname(file.name) === '.css') {
            fs.createReadStream(path.join(__dirname, 'styles', file.name)).on('data', data => {
              fs.createWriteStream(bundle).write(data);
            });
          }
        })
      }) 
  } catch (error) {
    console.log('Error: ', error.message);
  }
}
mergeBundle();