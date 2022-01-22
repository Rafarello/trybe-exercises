const loader = require('../index');
const assert = require('assert');
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs')

describe("Carrega a configuração do arquivo",
  () => {

    describe("Quando o arquivo está presente",
      () => {

        before(() => {
          sinon.stub(fs, "readFileSync").returns("config")
        })

        it("Retorna o conteúdo", () => {
          const config = loader('./test/fixtures/config.json');
          expect(config).to.equal('config')
        })

        after(() => {
          fs.readFileSync.restore();
        })

      })

    describe("Quando o arquivo está ausente",
      () => {

        before(() => {
          sinon.stub(fs, "readFileSync").returns("SECRETO")
        })

        it("Retorna o conteúdo quando é SECRETO", () => {
          const config = loader('./test/fixtures/secret.json');
          expect(config).to.equal('SECRETO')
        })

        after(() => {
          fs.readFileSync.restore();
        })

      })

    describe("Quando o arquivo está ausente",
      () => {

        before(() => {
          sinon.stub(fs, "readFileSync").returns("PADRÃO")
        })

        it("Retorna uma configuração padrão", () => {
          const config = loader('./arquivo-que-nao-existe');
          expect(config).to.equal('PADRÃO')
        })

        after(() => {
          fs.readFileSync.restore();
        })
      })

    describe("Quando o arquivo está presente com conteúdo JSON",
      () => {
        before(() => {
          sinon.stub(fs, 'readFileSync').returns('{"debug": true}');
        })
        const config = loader("./test/fixtures/secret.json", { loadJSON: true });
        expect(config).to.be.an.an('object');
      })

  })