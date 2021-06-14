const express  =  require('express');
const routes = require('./routes');
const cors = require('cors');
const server = express();


server.use(express.json());
server.use(cors());
server.use(routes);
server.listen(process.env.PORT || 3333, () => {
  console.log('Back-end started!');
});

