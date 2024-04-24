import {Router, Request, Response} from 'express';
import {useTypeORM} from '../db/postgresql/typeorm';
import {OrderEntity} from "../db/postgresql/entity/order.entity";

const controller = Router();

controller
    .get('/', async (req: Request, res: Response) => {
        const orders = await useTypeORM(OrderEntity).find({
            relations: ['products', 'staffMember']
        });
        res.send(orders);
    })


export default controller;