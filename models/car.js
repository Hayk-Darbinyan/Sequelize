import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Car = sequelize.define('Car', {
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^\\d+$/
        }
      },
      year: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      vin: {
        type: DataTypes.STRING,
        unique: true,
      },
      model_id: {
        type: DataTypes.INTEGER,
      },
      dealership_id: {
        type: DataTypes.INTEGER
      }
    }, {
      timestamps: false,
      tableName: 'cars',
    });
    return Car;
  };