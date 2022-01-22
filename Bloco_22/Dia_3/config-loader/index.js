const fs = require('fs');

const DEFAULT_VALUE = 'PADRÃO';

const fileLoader = (path) => {

  try {

    return fs.readFileSync(path, 'utf-8');

  } catch (error) {

    return DEFAULT_VALUE;

  }
}

const loader = (path, options) => {

  const fileContent = fileLoader(path);

  if(options && options.loadJSON) {

    return JSON.parse(fileContent);

  }
  return fileContent
}

module.exports = loader;