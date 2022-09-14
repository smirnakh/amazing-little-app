require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
const PORT = process.env.PORT || 5001;
server.use(express.json());
server.use(cors());

server.get('/api/hello', (req, res) => {
  res.json({
    message: 'api is working',
  });
});

server.use('*', (req, res) => {
  res.send('hello');
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

server.listen(PORT, () => {
  console.log('listening on port', PORT);
});
