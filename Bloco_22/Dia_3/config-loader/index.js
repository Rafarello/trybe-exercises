const fs = require('fs');

const DEFAULT_VALUE = 'PADRÃO';

const loader = (path) => {

  try {

    return fs.readFileSync(path, 'utf-8');

  } catch (error) {

    return DEFAULT_VALUE;

  }
}

module.exports = loader;