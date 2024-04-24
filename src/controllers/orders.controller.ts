import { Router, Request, Response } from 'express';
import { useTypeORM } from '../db/postgresql/typeorm';
import { OrderEntity } from '../db/postgresql/entity/order.entity';
import { Between } from 'typeorm';

const controller = Router();

controller.get('/', async (req: Request, res: Response) => {
  const { startDate: startDateString, endDate: endDateString, staffMemberId } = req.query;

  // do validation of the query parameters
  const fromDate = new Date(startDateString as string);
  const endDate = new Date(endDateString as string);

  let orders;
  try {
    orders = await useTypeORM(OrderEntity).find({
      relations: ['products', 'staffMember'],
      where: {
        staffMemberId,
        date: Between(fromDate, endDate),
      },
    });
  } catch (e) {
    return res.status(500).send('Error fetching orders');
  }

  res.send(orders);
});

export default controller;
