import {Express, Request, Response} from 'express';
import productsRouter from '../controllers/products.controller';
import ordersRouter from '../controllers/orders.controller';
import staffMembersRouter from '../controllers/staffMembers.controller';

const routerSetup = (app: Express) =>
    app.get('/', async (req: Request, res: Response) => {
        return res.send("Hei there!");
    })
        .use('/api/orders', ordersRouter)
        .use('/api/products', productsRouter)
        .use('/api/staffMembers', staffMembersRouter)

export default routerSetup;