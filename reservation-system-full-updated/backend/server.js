require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./src/routes/admin');
const authMiddleware = require('./src/middleware/auth');
const reservationsRoutes = require('./src/routes/reservations');
const availabilityRoutes = require('./src/routes/availability');
const usersRoutes       = require('./src/routes/users');
const reportRoutes = require('./src/routes/reports');
const waitlistRoutes = require('./src/routes/waitlist');
const loyaltyRoutes = require('./src/routes/loyalty');
const settingsRoutes = require('./src/routes/settings');
const restaurantsRoutes = require('./src/routes/restaurants');

const app = express();
app.use(bodyParser.json());

// Public admin endpoints
app.post('/admin/signup', adminRoutes.signup);
app.post('/admin/login',  adminRoutes.login);

// Protected restaurant endpoints (you’ll need to define this router)
app.use('/admin/restaurants', authMiddleware, adminRoutes.restaurantRouter);

// (other protected routes go here, e.g. waitlist, loyalty, etc.)

// Health check
app.get('/', (req, res) => res.send('Backend API v2 running'));

const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => console.log(`Server v2 running on port ${PORT}`));


app.use('/admin/reports', authMiddleware, reportRoutes);

app.use('/admin/waitlist', authMiddleware, waitlistRoutes);

app.use('/admin/loyalty', authMiddleware, loyaltyRoutes);

app.use('/admin/settings', authMiddleware, settingsRoutes);

app.use('/reservations', reservationsRoutes);
app.use('/availability', availabilityRoutes);
app.use('/admin/users', authMiddleware, usersRoutes);
app.use('/admin/restaurants', authMiddleware, restaurantsRoutes);

// server.js (excerpt)
const bcrypt = require('bcrypt');
const { sequelize, Admin } = require('./src/models');

const DEFAULT_ADMIN_EMAIL = process.env.DEFAULT_ADMIN_EMAIL;
const DEFAULT_ADMIN_PW    = process.env.DEFAULT_ADMIN_PASSWORD;

sequelize.sync({ alter: true }).then(async () => {
  // Seed default admin if none exists
  if (DEFAULT_ADMIN_EMAIL && DEFAULT_ADMIN_PW) {
    const exists = await Admin.findOne({ where: { email: DEFAULT_ADMIN_EMAIL } });
    if (!exists) {
      const hash = await bcrypt.hash(DEFAULT_ADMIN_PW, 10);
      await Admin.create({ email: DEFAULT_ADMIN_EMAIL, password_hash: hash, verified: true });
      console.log(`✳️  Created default admin: ${DEFAULT_ADMIN_EMAIL}`);
    }
  }
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
