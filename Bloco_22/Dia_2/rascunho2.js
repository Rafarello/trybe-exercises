const fs = require('fs');

const main = async () => {

  try {

    const content = await fs.promises.readFile(
      './hello.txt',
      { encoding: "utf-8" });
    return content;

  } catch (error) {

    console.error(error);

  }
};

console.log('Antes de tudo');
main()
  .then((content) => console.log(content))

console.log('Depois de tudo');
