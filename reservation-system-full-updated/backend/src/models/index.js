// backend/src/models/index.js
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
  console.error('⚠️  DATABASE_URL not set in .env');
  process.exit(1);
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
});

// Import model factories
const AdminFactory         = require('./admin');
const RestaurantFactory    = require('./restaurant');
const TableFactory         = require('./table');
const CustomerFactory      = require('./customer');
const ReservationFactory   = require('./reservation');
const WaitlistEntryFactory = require('./waitlist-entry');
const LoyaltyFactory       = require('./loyalty');

// Initialize models
const Admin           = AdminFactory(sequelize, DataTypes);
const Restaurant      = RestaurantFactory(sequelize, DataTypes);
const Table           = TableFactory(sequelize, DataTypes);
const Customer        = CustomerFactory(sequelize, DataTypes);
const Reservation     = ReservationFactory(sequelize, DataTypes);
const WaitlistEntry   = WaitlistEntryFactory(sequelize, DataTypes);
const Loyalty         = LoyaltyFactory(sequelize, DataTypes);

// Define associations
Restaurant.hasMany(Table,   { foreignKey: 'restaurant_id' });
Table.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

Table.hasMany(Reservation,   { foreignKey: 'table_id' });
Reservation.belongsTo(Table, { foreignKey: 'table_id' });

Customer.hasMany(Reservation,   { foreignKey: 'customer_id' });
Reservation.belongsTo(Customer, { foreignKey: 'customer_id' });

// Export sequelize instance and models
module.exports = {
  sequelize,
  Admin,
  Restaurant,
  Table,
  Customer,
  Reservation,
  WaitlistEntry,
  Loyalty,
};
