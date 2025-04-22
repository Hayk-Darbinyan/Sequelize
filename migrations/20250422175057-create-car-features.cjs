module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('car_features', {
      car_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      feature_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('car_features');
  }
};