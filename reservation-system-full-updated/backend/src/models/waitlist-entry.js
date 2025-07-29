module.exports = (sequelize, DataTypes) => {
  return sequelize.define('WaitlistEntry', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    party_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'waiting',
    },
  }, {
    tableName: 'waitlist_entries',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
};
