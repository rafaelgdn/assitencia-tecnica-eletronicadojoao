import Sequelize, { Model } from 'sequelize';

class Equipment extends Model {
  static init(sequelize) {
    super.init(
      {
        brand: Sequelize.STRING,
        model: Sequelize.STRING,
        defect: Sequelize.STRING,
        accessories: Sequelize.STRING,
        serie: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Customer, { foreignKey: 'customer_id' });
  }
}

export default Equipment;
