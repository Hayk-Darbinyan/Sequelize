module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('features', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('features');
  }
};