module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      defect: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accessories: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serie: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: { model: 'customers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
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
    return queryInterface.dropTable('equipments');
  },
};
