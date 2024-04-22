import { Router, Request, Response } from 'express';
import { useTypeORM } from '../postgresql/typeorm';
import { CategoryEntity } from '../postgresql/entity/category.entity';

const controller = Router();

controller
    .get('/', async (req: Request, res: Response) => {
        const products = await useTypeORM(CategoryEntity).find();
        res.send(products);
    })


export default controller;