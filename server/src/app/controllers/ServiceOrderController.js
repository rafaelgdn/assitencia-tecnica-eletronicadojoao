// import { Op } from 'sequelize';
import * as Yup from 'yup';

import Address from '../models/Address';
// import Customer from '../models/Customer';
// import Equipment from '../models/Equipment';
// import ServiceOrder from '../models/ServiceOrder';

class ServiceOrderController {
  async store(req, res) {
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

    // const { street, number, district, city } = req.body;
    // [Op.and]: [{ street }, { number }, { district }, { city }],

    const addressExists = await Address.findByPk(1);

    return res.json(addressExists);
  }
}

export default new ServiceOrderController();
