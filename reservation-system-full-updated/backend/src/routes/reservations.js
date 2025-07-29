const express = require('express');
const router = express.Router();
const { Reservation, Table, Customer } = require('../models');
const { Op } = require('sequelize');

// Create reservation
router.post('/', async (req, res) => {
  const { restaurant_id, date, time_slot, guest_count, customer } = req.body;
  // find table
  const table = await Table.findOne({ where: { restaurant_id, capacity: { [Op.gte]: guest_count } } });
  if (!table) return res.status(409).json({ error: 'No available table' });
  // create customer
  const cust = await Customer.create(customer);
  // create reservation
  const r = await Reservation.create({ table_id: table.id, customer_id: cust.id, date, time_slot, guest_count, status: 'confirmed' });
  res.status(201).json(r);
});

// Get all reservations
router.get('/', async (req, res) => {
  const list = await Reservation.findAll({ include: [Customer, Table] });
  res.json(list);
});

module.exports = router;