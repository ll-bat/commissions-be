import {Router, Request, Response} from 'express';
import {useTypeORM} from '../postgresql/typeorm';
import {OrderEntity} from "../postgresql/entity/order.entity";

const controller = Router();

controller
    .get('/', async (req: Request, res: Response) => {
        const orders = await useTypeORM(OrderEntity).find();
        res.send(orders);
    })


export default controller;