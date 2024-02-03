const express = require('express');
const data = require('./data.json');

const app = express();
const cors = require('cors');
app.use(cors()); 

app.get('/', (req, res) => {
  res.send(data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});