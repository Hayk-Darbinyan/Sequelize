module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('makes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('makes');
  }
};
