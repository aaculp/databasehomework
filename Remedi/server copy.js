const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();

server.use(logger('dev'));
server.use(express.static('client/build'))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

server.get('/', (req, res) => {
  res.send('hello world');
});

const remediRoutes = require('./routes/routes');
server.use('/remedi', remediRoutes);

server.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});
