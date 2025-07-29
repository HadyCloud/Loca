// backend/src/models/restaurant.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Restaurant', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact_phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    theme: {
      type: DataTypes.JSON,
      defaultValue: {
        primary: '#5B3E99',
        secondary: '#E3D3F1',
        accent: '#FFD700'
      }
    }
  }, {
    tableName: 'restaurants',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
};
