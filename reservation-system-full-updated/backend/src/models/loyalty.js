module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Loyalty', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    tableName: 'loyalty',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
};
