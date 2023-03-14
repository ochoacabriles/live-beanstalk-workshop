const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (_, res) => {
  res.json({ status: 'working' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server ready on port ${process.env.PORT}`);
});
