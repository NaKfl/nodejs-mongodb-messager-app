const express = require('express');
const app = express();

const PORT = 8017;
const HOST_NAME = 'localhost';

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server is listening on ${HOST_NAME}:${PORT}`);
});

app.get('/', (req, res) => {
  return res.send('Hello world');
});
