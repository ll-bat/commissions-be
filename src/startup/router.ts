import { Express, Request, Response } from 'express';
import productsRouter from '../controllers/products.controller';
import ordersRouter from '../controllers/orders.controller';
import staffMembersRouter from '../controllers/staffMembers.controller';
import categoriesRouter from '../controllers/categories.controller';

const routerSetup = (app: Express) =>
  app
    .get('/', (req: Request, res: Response) => {
      return res.send('Hei there!');
    })
    .use('/api/orders', ordersRouter)
    .use('/api/products', productsRouter)
    .use('/api/staff-members', staffMembersRouter)
    .use('/api/categories', categoriesRouter);

export default routerSetup;
