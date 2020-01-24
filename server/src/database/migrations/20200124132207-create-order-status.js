module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_status', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('order_status');
  },
};
