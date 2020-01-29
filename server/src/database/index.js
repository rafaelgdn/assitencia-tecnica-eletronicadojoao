import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';
import Address from '../app/models/Address';
import Customer from '../app/models/Customer';
import Product from '../app/models/Product';
import ServiceOrder from '../app/models/ServiceOrder';
import OrderStatus from '../app/models/OrderStatus';
import OrderStatusController from '../app/controllers/OrderStatusController';

const models = [
  User,
  File,
  Address,
  Customer,
  Product,
  ServiceOrder,
  OrderStatus,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));

    OrderStatusController.store();
  }
}

export default new Database();
