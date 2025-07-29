const express = require('express');
const router = express.Router();
const { Restaurant } = require('../models');

// List restaurants for current admin
router.get('/', async (req, res) => {
  const list = await Restaurant.findAll({ where: { admin_id: req.adminId } });
  res.json(list);
});

// Create restaurant
router.post('/', async (req, res) => {
  const rest = await Restaurant.create({ ...req.body, admin_id: req.adminId });
  res.status(201).json(rest);
});

// Update restaurant
router.put('/:id', async (req, res) => {
  await Restaurant.update(req.body, { where: { id: req.params.id, admin_id: req.adminId } });
  res.json({ updated: true });
});

module.exports = router;