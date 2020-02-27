const express = require('express');



const server = express();



const ProjectRouter = require("./data/projectRouter");
const ResourceRouter = require("./data/resourceRouter");
const TaskRouter = require("./data/taskRouter");

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);

server.get("/", (req, res) => {res.send('this is a thing :p')});

module.exports = server;