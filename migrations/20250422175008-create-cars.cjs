module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      vin: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      model_id: {
        type: Sequelize.INTEGER
      },
      dealership_id: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('cars');
  }
};
