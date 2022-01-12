const fs = require('fs');

const main = async () => {
  const content = await fs.promises.readFile('./hello.txt', { encoding: "utf-8" });

  return content;  
};

console.log('Antes de tudo');
main()
  .then((content) => console.log(content))
  .catch((erro) => console.error(erro))

console.log('Depois de tudo');
