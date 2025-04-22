import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Rating = sequelize.define('Rating', {
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0, max: 5 },
    },
  }, {
    timestamps: false,
    tableName: 'ratings',
  });

  return Rating;
};
