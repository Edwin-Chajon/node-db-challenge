const express = require('express');

const Projects = require('./helpers.js');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.findProjects(req.query)
    .then(projects => {res.json(projects)})
    .catch(() => {res.status(500).json({message: 'nope'})});
  });


router.get("/:id/tasks", (req, res) => {
    Projects.findTasks(req.params.id)
      .then(data => {res.json(data)})
      .catch(() => {res.status(500).json({ message: 'does not compute lol'  })});
});

router.post('/', (req, res) => {
    const projectData = req.body;
  console.log(projectData)
    Projects.addProjects(projectData)
    .then(data => {res.status(201).json(data)})
    .catch (() => {res.status(500).json({message: 'nope'})});
});



module.exports = router;