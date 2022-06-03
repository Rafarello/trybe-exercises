/* eslint-disable no-throw-literal */
const express = require('express');
const app = express();

const Character = require('./models/character');

app.use(express.json());

app
    .get('/', (req, res) => res.send('oi'))

    .get('/characters', async (req, res)=>{
      const characters = await Character.getAll();
      res.json(characters);
    })

    .post('/characters', async (req, res) => {
      const {characterName, cartoon} = req.body;
      const characterID = await Character.insert(characterName, cartoon);
      res.json(characterID);
    })

    .delete('/characters/:characterId', async (req, res) => {
      const {characterId} = req.params;
      try {
        const data = await Character.delete(characterId);
        res.json(data);
      } catch (error) {
        console.error(error);
        res.sendStatus(500);
      }
    });


app.listen(3000, () => console.log('Tá rodando na porta 3000'));
