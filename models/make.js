import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Make = sequelize.define('Make', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    timestamps: false,
    tableName: 'makes'
  });
  return Make;
};