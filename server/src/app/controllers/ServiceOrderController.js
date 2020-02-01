/* eslint-disable prettier/prettier */
import Sequelize, { Op, QueryTypes } from 'sequelize';
import * as Yup from 'yup';

import Address from '../models/Address';
import Customer from '../models/Customer';
import Product from '../models/Product';
import ServiceOrder from '../models/ServiceOrder';
import OrderStatus from '../models/OrderStatus';

class ServiceOrderController {
  async index(req, res) {
    const serviceOrders = await ServiceOrder.sequelize.query(
      'SELECT "ServiceOrder"."id", "ServiceOrder"."date",' +
      ' "ServiceOrder"."budget_value" AS "budgetValue",' +
      ' "ServiceOrder"."budget_description" AS "budgetDescription",' +
      ' "ServiceOrder"."payment_sign" AS "paymentSign",' +
      ' "ServiceOrder"."comments", "ServiceOrder"."created_at" AS' +
      ' "createdAt", "ServiceOrder"."updated_at" AS "updatedAt",' +
      ' "ServiceOrder"."order_status_id", "ServiceOrder"."customer_id",' +
      ' "ServiceOrder"."product_id", "OrderStatus"."id" AS' +
      ' "OrderStatus.id", "OrderStatus"."description" AS' +
      ' "OrderStatus.description", "OrderStatus"."created_at" AS' +
      ' "OrderStatus.createdAt", "OrderStatus"."updated_at" AS' +
      ' "OrderStatus.updatedAt", "Customer"."id" AS "Customer.id",' +
      ' "Customer"."name" AS "Customer.name", "Customer"."email" AS' +
      ' "Customer.email", "Customer"."cpf" AS "Customer.cpf",' +
      ' "Customer"."phone_number" AS "Customer.phone_number",' +
      ' "Customer"."created_at" AS "Customer.createdAt",' +
      ' "Customer"."updated_at" AS "Customer.updatedAt",' +
      ' "Customer"."address_id" AS "Customer.address_id",' +
      ' "Customer->Address"."id" AS "Customer.Address.id",' +
      ' "Customer->Address"."street" AS "Customer.Address.street",' +
      ' "Customer->Address"."number" AS "Customer.Address.number",' +
      ' "Customer->Address"."complement" AS "Customer.Address.complement",' +
      ' "Customer->Address"."district" AS "Customer.Address.district",' +
      ' "Customer->Address"."city" AS "Customer.Address.city",' +
      ' "Customer->Address"."state" AS "Customer.Address.state",' +
      ' "Customer->Address"."zipcode" AS "Customer.Address.zipcode",' +
      ' "Customer->Address"."country" AS "Customer.Address.country",' +
      ' "Customer->Address"."created_at" AS "Customer.Address.createdAt",' +
      ' "Customer->Address"."updated_at" AS "Customer.Address.updatedAt",' +
      ' "Product"."id" AS "Product.id", "Product"."brand" AS "Product.brand",' +
      ' "Product"."model" AS "Product.model", "Product"."defect" AS' +
      ' "Product.defect", "Product"."accessories" AS "Product.accessories",' +
      ' "Product"."serie" AS "Product.serie", "Product"."created_at" AS' +
      ' "Product.createdAt", "Product"."updated_at" AS "Product.updatedAt",' +
      ' "Product"."customer_id" AS "Product.customer_id" FROM "service_orders"' +
      ' AS "ServiceOrder" INNER JOIN "order_statuses" AS "OrderStatus" ON' +
      ' "ServiceOrder"."order_status_id" = "OrderStatus"."id" AND' +
      ' "OrderStatus"."id" = "ServiceOrder"."order_status_id" INNER JOIN' +
      ' "customers" AS "Customer" ON "ServiceOrder"."customer_id"' +
      ' = "Customer"."id" AND "Customer"."id" = "ServiceOrder"."customer_id"' +
      ' INNER JOIN "addresses" AS "Customer->Address" ON "Customer"."address_id"' +
      ' = "Customer->Address"."id" AND "Customer->Address"."id" =' +
      ' "Customer"."address_id" INNER JOIN "products" AS "Product" ON' +
      ' "ServiceOrder"."product_id" = "Product"."id" AND "Product"."id"' +
      ' = "ServiceOrder"."product_id"',
      { type: QueryTypes.SELECT }
    );

    const formattedOrders = serviceOrders.map(so => {
      const formattedOrder = {
        id: so.id,
        date: so.date,
        budgetValue: so.budgetValue,
        budgetDescription: so.budgetDescription,
        paymentSign: so.paymentSign,
        comments: so.comments,
        createdAt: so.createdAt,
        updatedAt: so.updatedAt,
        order_status_id: so.order_status_id,
        customer_id: so.customer_id,
        product_id: so.product_id,
        orderStatus: {
          id: so['OrderStatus.id'],
          description: so['OrderStatus.description'],
          createdAt: so['OrderStatus.createdAt'],
          updatedAt: so['OrderStatus.updatedAt'],
        },
        product: {
          id: so['Product.id'],
          brand: so['Product.brand'],
          model: so['Product.model'],
          defect: so['Product.defect'],
          accessories: so['Product.accessories'],
          serie: so['Product.serie'],
          createdAt: so['Product.createdAt'],
          updatedAt: so['Product.updatedAt'],
          customer_id: so['Product.customer_id'],
        },
        customer: {
          id: so['Customer.id'],
          name: so['Customer.name'],
          email: so['Customer.email'],
          cpf: so['Customer.cpf'],
          phone_number: so['Customer.phone_number'],
          createdAt: so['Customer.createdAt'],
          updatedAt: so['Customer.updatedAt'],
          address_id: so['Customer.address_id'],
          address: {
            id: so['Customer.Address.id'],
            street: so['Customer.Address.street'],
            number: so['Customer.Address.number'],
            complement: so['Customer.Address.complement'],
            district: so['Customer.Address.district'],
            city: so['Customer.Address.city'],
            state: so['Customer.Address.state'],
            zipcode: so['Customer.Address.zipcode'],
            country: so['Customer.Address.country'],
            createdAt: so['Customer.Address.createdAt'],
            updatedAt: so['Customer.Address.updatedAt'],
          },
        },
      };

      return formattedOrder;
    });

    // There is a sequelize query bug when i use include inside another include.
    // So, i need to use raw.
    //
    // const serviceOrders = await ServiceOrder.findAll({
    //   include: [
    //     {
    //       model: OrderStatus,
    //       where: {
    //         id: Sequelize.where(
    //           Sequelize.col('OrderStatus.id'),
    //           Sequelize.col('ServiceOrder.order_status_id')
    //         ),
    //       },
    //     },
    //     {
    //       model: Customer,
    //       where: {
    //         id: Sequelize.where(
    //           Sequelize.col('Customer.id'),
    //           Sequelize.col('ServiceOrder.customer_id')
    //         ),
    //       },
    //       include: [
    //         {
    //           model: Address,
    //           where: {
    //             id: Sequelize.where(
    //               Sequelize.col('Address.id'),
    //               Sequelize.col('Customer.addressId')
    //             ),
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       model: Product,
    //       where: {
    //         id: Sequelize.where(
    //           Sequelize.col('Product.id'),
    //           Sequelize.col('ServiceOrder.product_id')
    //         ),
    //       },
    //     },
    //   ],
    // });

    res.json(formattedOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      district: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zipcode: Yup.string(),
      country: Yup.string(),
      email: Yup.string().email(),
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      phone_number: Yup.string().required(),
      brand: Yup.string().required(),
      model: Yup.string().required(),
      defect: Yup.string().required(),
      accessories: Yup.string().required(),
      serie: Yup.string(),
      date: Yup.date(),
      budgetValue: Yup.string(),
      budgetDescription: Yup.string(),
      paymentSign: Yup.string(),
      comments: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      street,
      number,
      complement,
      district,
      city,
      state,
      zipcode,
      country,
      cpf,
      email,
      name,
      phone_number,
      brand,
      model,
      defect,
      accessories,
      serie,
      budgetValue,
      budgetDescription,
      paymentSign,
      comments,
    } = req.body;

    const t = await ServiceOrder.sequelize.transaction();

    try {
      const [{ id: addressId }] = await Address.findOrCreate({
        where: {
          [Op.and]: [{ street }, { number }, { district }, { city }, { state }],
        },
        defaults: {
          street,
          number,
          complement,
          district,
          city,
          state,
          zipcode,
          country,
        },
        transaction: t,
      });

      const [{ id: customerId }] = await Customer.findOrCreate({
        where: {
          cpf,
        },
        defaults: {
          name,
          email,
          cpf,
          phone_number,
          address_id: addressId,
        },
        transaction: t,
      });

      const { id: productId } = await Product.create(
        {
          brand,
          model,
          defect,
          accessories,
          serie,
          customer_id: customerId,
        },
        { transaction: t }
      );

      const order = await ServiceOrder.create(
        {
          budgetValue,
          budgetDescription,
          paymentSign,
          comments,
          order_status_id: 1,
          customer_id: customerId,
          product_id: productId,
        },
        { transaction: t }
      );

      await t.commit();
      return res.json(order);
    } catch (err) {
      await t.rollback();
      return res
        .status(500)
        .json({ error: `Service Order creation fails: ${err}` });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      district: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      zipcode: Yup.string(),
      country: Yup.string(),
      email: Yup.string().email(),
      name: Yup.string(),
      cpf: Yup.string(),
      phone_number: Yup.string(),
      brand: Yup.string(),
      model: Yup.string(),
      defect: Yup.string(),
      accessories: Yup.string(),
      serie: Yup.string(),
      date: Yup.date(),
      budgetValue: Yup.string(),
      budgetDescription: Yup.string(),
      paymentSign: Yup.string(),
      comments: Yup.string(),
      order_status_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      street,
      number,
      district,
      city,
      state,
      zipcode,
      country,
      cpf,
      email,
      name,
      phone_number,
      brand,
      model,
      defect,
      accessories,
      serie,
      budgetValue,
      budgetDescription,
      paymentSign,
      comments,
      orderStatusId,
    } = req.body;

    const { id: orderId } = req.params;

    const t = await ServiceOrder.sequelize.transaction();
    try {
      const { customer_id, product_id } = await ServiceOrder.findOne({
        where: {
          id: orderId,
        },
      });

      const { address_id } = await Customer.findByPk(customer_id);

      await Address.update(
        {
          street,
          number,
          district,
          city,
          state,
          zipcode,
          country,
        },
        {
          where: {
            id: address_id,
          },
        },
        { transaction: t }
      );

      await Customer.update(
        {
          cpf,
          email,
          name,
          phone_number,
        },
        {
          where: {
            id: customer_id,
          },
        },
        { transaction: t }
      );

      await Product.update(
        {
          brand,
          model,
          defect,
          accessories,
          serie,
        },
        {
          where: {
            id: product_id,
          },
        },
        { transaction: t }
      );

      await ServiceOrder.update(
        {
          budgetValue,
          budgetDescription,
          paymentSign,
          comments,
          order_status_id: orderStatusId,
        },
        {
          where: {
            id: orderId,
          },
        },
        { transaction: t }
      );

      const updatedOrder = await ServiceOrder.findOne({
        where: { id: orderId },
        include: [
          {
            model: OrderStatus,
            where: {
              id: Sequelize.where(
                Sequelize.col('OrderStatus.id'),
                Sequelize.col('ServiceOrder.order_status_id')
              ),
            },
          },
          {
            model: Customer,
            where: {
              id: Sequelize.where(
                Sequelize.col('Customer.id'),
                Sequelize.col('ServiceOrder.customer_id')
              ),
            },
            include: [
              {
                model: Address,
                where: {
                  id: customer_id,
                },
              },
            ],
          },
          {
            model: Product,
            where: {
              id: Sequelize.where(
                Sequelize.col('Product.id'),
                Sequelize.col('ServiceOrder.product_id')
              ),
            },
          },
        ],
      });

      await t.commit();

      return res.json(updatedOrder);
    } catch (err) {
      await t.rollback();
      return res
        .status(500)
        .json({ error: `Service Order update fails:${err}` });
    }
  }
}

export default new ServiceOrderController();
