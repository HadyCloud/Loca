module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Reservation', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    table_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time_slot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guest_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'reservations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
};
