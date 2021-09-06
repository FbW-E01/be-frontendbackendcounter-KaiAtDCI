const express = require('express');
const httpPort = 4000;

const server = express();
server.use(express.json())

let counter = 0;

server.post("/counter", (req, res) => {
  counter++
  res.status(200).send('counter increased');
})

server.get("/counter", (req, res) => {
  // res.status(200).send('Hello');
  res.status(200).json({counter: counter});
})


server.listen(httpPort, () =>
  console.log(`Http server listening on port: ${httpPort}`));