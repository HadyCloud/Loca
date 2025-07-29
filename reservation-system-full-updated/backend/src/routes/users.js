const express = require('express');
const router = express.Router();
const { User } = require('../models');

// List users
router.get('/', async (req, res) => res.json(await User.findAll()));
// Create user
router.post('/', async (req, res) => res.json(await User.create(req.body)));
// Update user
router.put('/:id', async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.json({ updated: true });
});

module.exports = router;