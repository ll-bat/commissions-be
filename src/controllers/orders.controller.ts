import {Router, Request, Response} from 'express';
import {useTypeORM} from '../db/postgresql/typeorm';
import {OrderEntity} from "../db/postgresql/entity/order.entity";
import {StaffMemberEntity} from "../db/postgresql/entity/staffMember.entity";
import {Between} from "typeorm";

const controller = Router();

controller
    .get('/', async (req: Request, res: Response) => {
        const {startDate: startDateString, endDate: endDateString, staffMemberId} = req.query;

        const fromDate = new Date(startDateString as string);
        const endDate = new Date(endDateString as string);

        const orders = await useTypeORM(OrderEntity).find({
            relations: ['products', 'staffMember'],
            where: {
                staffMemberId,
                date: Between(fromDate, endDate)
            }
        });

        res.send(orders);
    })


export default controller;