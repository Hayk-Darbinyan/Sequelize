module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('models', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      make_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('models');
  }
};
