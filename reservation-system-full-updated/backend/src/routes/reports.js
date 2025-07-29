// backend/src/routes/reports.js
const express = require('express');
const router = express.Router();
const { Reservation } = require('../models');
const { Sequelize } = require('sequelize');

router.get('/daily', async (req, res) => {
  try {
    const data = await Reservation.findAll({
      attributes: [
        [Sequelize.fn('DATE', Sequelize.col('created_at')), 'date'],
        [Sequelize.fn('COUNT', '*'), 'covers']
      ],
      group: ['date'],
      order: [['date', 'ASC']],
      limit: 7
    });
    res.json(data.map(r => ({
      date: r.get('date'),
      covers: parseInt(r.get('covers'), 10)
    })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
});

module.exports = router;
