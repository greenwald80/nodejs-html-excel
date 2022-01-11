const fs = require('fs');
const htmlTo = require('html2xlsx-hd');
const path = require('path');

const fileName = 'example';
const htmlPath = path.join(`input/${fileName}.html`);

function run() {
  fs.readFile(htmlPath
    , (err, data) => {
      if (err) console.log(err.message);
      console.log(`Process starting with file input/${fileName}.html`);
      htmlTo(`${data}`
        , (err, file) => {
          if (err) return console.error(err);
          file.saveAs()
            .pipe(fs.createWriteStream(`output/${fileName}.xlsx`))
            .on('finish', () => console.log(`Done successfully and saved to output folder as ${fileName}.xlsx`));
        });
    })
}

run();
