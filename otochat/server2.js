const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


io.on('connection', (socket) => 
{
  socket.on('toServer message', (msg) => {
    console.log('reveived message: ' + msg);
	io.emit('toClient message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
server.listen(port, function() {
    console.log('Server On !');
});