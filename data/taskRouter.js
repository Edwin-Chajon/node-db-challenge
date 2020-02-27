const express = require('express');

const Tasks = require('./helpers.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.find(req.query)
    .then(tasks => {res.json(tasks)})
    .catch((err) => next(err));
});


//res.json(Tasks.findProjects(project_id).then(project => {res.json(project)}))


router.post("/", (req, res, next) => {
    Tasks.addTask(req.body)
      .then(newTaskss => {res.json(newTaskss)})
      .catch(() => {res.status(500).json({ message: 'does not compute lol'  })});
});

module.exports = router;