// server/index.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
app.use(express.json());
const server = http.createServer(app);
new Server(server);
server.listen(3001, ()=>console.log("Server running on 3001"));