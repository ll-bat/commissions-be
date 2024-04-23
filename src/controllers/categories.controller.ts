import {Router, Request, Response} from 'express';
import {useTypeORM} from '../db/postgresql/typeorm';
import {CategoryEntity} from "../db/postgresql/entity/category.entity";

const controller = Router();

controller
    .get('/', async (req: Request, res: Response) => {
        const categories = await useTypeORM(CategoryEntity).find();
        res.send(categories);
    })


export default controller;