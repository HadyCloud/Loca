const express = require('express');
const router = express.Router();
const { Table, Reservation } = require('../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  const { restaurant_id, date, time_slot, guest_count } = req.query;
  const reserved = await Reservation.findAll({ where: { date, time_slot } });
  const reservedIds = reserved.map(r => r.table_id);
  const available = await Table.findAll({
    where: {
      restaurant_id,
      capacity: { [Op.gte]: guest_count },
      id: { [Op.notIn]: reservedIds }
    }
  });
  res.json(available);
});

module.exports = router;