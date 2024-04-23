import {Router, Request, Response} from 'express';
import {useTypeORM} from '../db/postgresql/typeorm';
import {ProductEntity} from "../db/postgresql/entity/product.entity";

const controller = Router();

controller
    .get('/', async (req: Request, res: Response) => {
        const products = await useTypeORM(ProductEntity).find({relations: ['category']});
        res.send(products);
    })


export default controller;