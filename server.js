const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let players = {};

io.on("connection", socket => {
  console.log("Player connected:", socket.id);
  players[socket.id] = { x: 100, y: 100, score: 0 };

  socket.emit("init", players);
  socket.broadcast.emit("new-player", { id: socket.id, ...players[socket.id] });

  socket.on("move", data => {
    if (players[socket.id]) {
      players[socket.id].x = data.x;
      players[socket.id].y = data.y;
      io.emit("update", { id: socket.id, x: data.x, y: data.y });
    }
  });

  socket.on("disconnect", () => {
    delete players[socket.id];
    io.emit("remove-player", socket.id);
    console.log("Player disconnected:", socket.id);
  });
});

app.use(express.static("public"));
server.listen(3000, () => console.log("Server running on port 3000"));
