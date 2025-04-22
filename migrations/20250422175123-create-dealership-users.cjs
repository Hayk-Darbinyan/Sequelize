module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dealership_users', {
      dealership_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('dealership_users');
  }
};
