const loader = require('../index');
const assert = require('assert')

describe("Carrega a configuração do arquivo",
  () => {
    describe("Quando o arquivo está presente",
    () => {
      it("Retorna o conteúdo", () => {
        const config = loader('./test/fixtures/config.json');
        assert.equal(config, 'config')
      }) 

      it("Retorna o conteúdo quando é SECRETO", () => {
        const config = loader('./test/fixtures/secret.json');
        assert.equal(config, 'SECRETO')
      }) 
    })

  })