import Sequelize, { Model } from 'sequelize';

class ServiceOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        budgetValue: Sequelize.STRING,
        budgetDescription: Sequelize.STRING,
        paymentSign: Sequelize.STRING,
        comments: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.OrderStatus, { foreignKey: 'order_status_id' });
    this.belongsTo(models.Customer, { foreignKey: 'customer_id' });
    this.belongsTo(models.Equipment, { foreignKey: 'equipment_id' });
  }
}

export default ServiceOrder;
