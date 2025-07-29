const express = require('express');
const router = express.Router();
const { Restaurant } = require('../models');

// GET theme
router.get('/', async (req, res) => {
  const rest = await Restaurant.findByPk(req.adminId);
  res.json({ theme: rest.theme });
});

// PUT theme
router.put('/', async (req, res) => {
  const { theme } = req.body;
  await Restaurant.update({ theme }, { where: { admin_id: req.adminId }});
  res.json({ saved: true });
});

module.exports = router;
