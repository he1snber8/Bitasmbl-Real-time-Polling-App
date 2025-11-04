// server/socket.js
module.exports.initSockets = function(server) {
  const io = require("socket.io")(server, { cors: { origin: "*" } });
  io.on("connection", socket => {
    console.log(`Client connected: ${socket.id}`);
    socket.on("disconnect", () => console.log(`Client disconnected: ${socket.id}`));
  });
};