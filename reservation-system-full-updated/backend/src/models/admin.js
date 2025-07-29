// backend/src/models/admin.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Admin', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'admins',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    });
  };
  