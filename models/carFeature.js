import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const CarFeature = sequelize.define('CarFeature', {}, {
      timestamps: false,
      tableName: 'car_features'
    });
    return CarFeature;
  };