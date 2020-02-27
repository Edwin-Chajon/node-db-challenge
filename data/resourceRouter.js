const express = require('express');

const Resources = require('./helpers.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.findResources(req.query)
    .then(data => {res.json(data)})
    .catch(() => {res.status(500).json({message: 'nope'})});
});

router.post("/", (req, res, next) => {
    Resources.addResource(req.body)
      .then(data => {res.json(data)})
      .catch(() => {res.status(500).json({ message: 'does not compute lol' })});
});

module.exports = router;