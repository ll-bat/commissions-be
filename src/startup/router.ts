import {Express, Request, Response} from 'express';
import productsRouter from '../controllers/product.controller';
import ordersRouter from '../controllers/order.controller';
import staffMembersRouter from '../controllers/staffMember.controller';

const routerSetup = (app: Express) =>
    app.get('/', async (req: Request, res: Response) => {
        return res.send("Hei there!");
    })
        .use('/api/orders', ordersRouter)
        .use('/api/products', productsRouter)
        .use('/api/staffMembers', staffMembersRouter)

export default routerSetup;