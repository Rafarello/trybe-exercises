const loader = require('../index');
const assert = require('assert');
const { expect } = require('chai');

describe("Carrega a configuração do arquivo",
  () => {
    describe("Quando o arquivo está presente",
      () => {
        it("Retorna o conteúdo", () => {
          const config = loader('./test/fixtures/config.json');
          expect(config).to.equal('config')
        })

        it("Retorna o conteúdo quando é SECRETO", () => {
          const config = loader('./test/fixtures/secret.json');
          expect(config).to.equal('SECRETO')
        })
      })

    describe("Quando o arquivo está ausente",
      () => {
        it("Retorna uma configuração padrão", () => {
          const config = loader('./arquivo-que-nao-existe');
          expect(config).to.equal('PADRÃO')
        })
      })

  })