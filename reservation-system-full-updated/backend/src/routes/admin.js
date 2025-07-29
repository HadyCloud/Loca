const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Admin } = require('../models');      // your Sequelize Admin model
const restaurantRouter = require('./restaurants');  // define in src/routes/restaurants.js

// Signup handler
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing credentials' });
    const hash = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ email, password_hash: hash });
    res.status(201).json({ admin_id: admin.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Login handler
// backend/src/routes/admin.js


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const match = await bcrypt.compare(password, admin.password_hash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('⚠️ JWT_SECRET is not set in .env');
      return res.status(500).json({ error: 'Server configuration error' });
    }
    const token = jwt.sign({ id: admin.id }, secret, { expiresIn: '1h' });
    return res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Server error during login' });
  }
};


// Expose the restaurant router under /admin/restaurants
exports.restaurantRouter = restaurantRouter;
