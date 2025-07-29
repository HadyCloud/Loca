const express = require('express');
const router = express.Router();
const { Loyalty } = require('../models');

// GET loyalty standings
router.get('/', async (req, res) => {
  const pts = await Loyalty.findAll({ order: [['points','DESC']], limit: 50 });
  res.json(pts);
});

module.exports = router;
