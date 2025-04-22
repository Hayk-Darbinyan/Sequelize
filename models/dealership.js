import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Dealership = sequelize.define('Dealership', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }, {
    paranoid: true,
    timestamps: false,
    tableName: 'dealerships',
  });

  return Dealership;
};
