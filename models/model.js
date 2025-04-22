import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const CarModel = sequelize.define('Model', {
    name: {
      type: DataTypes.STRING,
    },
    make_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'models'
  });
  return CarModel;
};