import { Op } from 'sequelize';
import OrderStatus from '../models/OrderStatus';

class OrderStatusController {
  async store() {
    const t = await OrderStatus.sequelize.transaction();

    try {
      const status = await OrderStatus.findOne({
        where: {
          [Op.or]: [
            { description: 'Aguardando Orçamento' },
            { description: 'Aguardando Autorização' },
            { description: 'Aguardando Conserto' },
            { description: 'Aguardando Retirada' },
          ],
        },
      });

      if (!status) {
        await OrderStatus.bulkCreate(
          [
            { description: 'Aguardando Orçamento' },
            { description: 'Aguardando Autorização' },
            { description: 'Aguardando Conserto' },
            { description: 'Aguardando Retirada' },
          ],
          { transaction: t }
        );
      }

      await t.commit();
    } catch (err) {
      await t.rollback();
    }
  }
}

export default new OrderStatusController();
