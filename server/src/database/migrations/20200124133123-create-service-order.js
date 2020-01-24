module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('service_order', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      budget_value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      budget_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      payment_sign: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      comments: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      order_status_id: {
        type: Sequelize.INTEGER,
        references: { model: 'order_status', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
        defaultValue: 1,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: { model: 'customers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      equipment_id: {
        type: Sequelize.INTEGER,
        references: { model: 'equipments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
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
    return queryInterface.dropTable('service_order');
  },
};
