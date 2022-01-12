const fs = require('fs');

const loader = (path) => fs.readFileSync(path, 'utf-8');

module.exports = loader;