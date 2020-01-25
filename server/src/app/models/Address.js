import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        district: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        zipcode: Sequelize.STRING,
        country: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Address;
