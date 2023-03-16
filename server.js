require('dotenv').config();
const express = require('express');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const { port } = require('./config/environment');
const read = require('./controllers/read');
const create = require('./controllers/create');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.send('OK');
});

app.get('/api/productos', async (_, res) => {
  const products = await read();

  res.json({ products });
});

app.post('/api/productos', async (req, res) => {
  const response = await create(req.body);

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server ready on port ${port}`);
});
