const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/walkerengineering/runtime.js',
    './dist/walkerengineering/polyfills.js',
    './dist/walkerengineering/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/walker-engineering.js');
  await fs.copyFile('./dist/walkerengineering/styles.css', 'elements/styles.css');
})();