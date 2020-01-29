module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      street: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      district: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      zipcode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        defaultValue: 'Brasil',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('addresses');
  },
};
