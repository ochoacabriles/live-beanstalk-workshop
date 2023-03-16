const express = require('express');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const { port } = require('./config/environment');
const read = require('./controllers/read');

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

app.listen(process.env.PORT, () => {
  console.log(`Server ready on port ${port}`);
});
