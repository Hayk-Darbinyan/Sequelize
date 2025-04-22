import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Feature = sequelize.define('Feature', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
    }
  }, {
    timestamps: false,
    tableName: 'features'
  });
  return Feature;
};