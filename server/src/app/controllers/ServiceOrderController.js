import { Op } from 'sequelize';
import * as Yup from 'yup';

import Address from '../models/Address';
import Customer from '../models/Customer';
import Product from '../models/Product';
import ServiceOrder from '../models/ServiceOrder';

class ServiceOrderController {
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
    } = req.body;

    const { id: orderId } = req.params;

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
      }
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
      }
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
      }
    );

    await ServiceOrder.update(
      {
        budgetValue,
        budgetDescription,
        paymentSign,
        comments,
      },
      {
        where: {
          id: orderId,
        },
      }
    );

    return res.json({ ok: true });
  }
}

export default new ServiceOrderController();
