module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Table', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    restaurant_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'tables',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
};
