import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        district: Sequelize.BOOLEAN,
        city: Sequelize.BOOLEAN,
        state: Sequelize.BOOLEAN,
        zipcode: Sequelize.BOOLEAN,
        country: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Address;
