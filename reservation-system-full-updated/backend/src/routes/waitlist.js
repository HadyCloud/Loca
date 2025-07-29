const express = require('express');
const router = express.Router();
const { WaitlistEntry } = require('../models');

// GET current waitlist
router.get('/', async (req, res) => {
  const list = await WaitlistEntry.findAll({ where: { status: 'waiting' }});
  res.json(list);
});

// POST to join waitlist
router.post('/', async (req, res) => {
  const entry = await WaitlistEntry.create(req.body);
  res.status(201).json(entry);
});

module.exports = router;
