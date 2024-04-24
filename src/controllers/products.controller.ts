import { Router, Request, Response } from 'express';
import { useTypeORM } from '../db/postgresql/typeorm';
import { ProductEntity } from '../db/postgresql/entity/product.entity';

const controller = Router();

controller
  .get('/', async (req: Request, res: Response) => {
    const products = await useTypeORM(ProductEntity).find({ relations: ['category'] });
    res.send(products);
  })
  .put('/commission-percent', async (req: Request, res: Response) => {
    const { productIds, commissionPercent } = req.body;
    try {
      const productsEntity = useTypeORM(ProductEntity);
      await productsEntity.update(productIds as string[], { commissionPercent });
    } catch (e) {
      return res.status(500).send('Error updating commission percent');
    }
    res.send('OK');
  });

export default controller;
