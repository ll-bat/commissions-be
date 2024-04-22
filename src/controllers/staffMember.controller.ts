import {Router, Request, Response} from 'express';
import {useTypeORM} from '../postgresql/typeorm';
import {StaffMemberEntity} from "../postgresql/entity/staffMember.entity";

const controller = Router();

controller
    .get('/', async (req: Request, res: Response) => {
        const staff_members = await useTypeORM(StaffMemberEntity).find();
        res.send(staff_members);
    })


export default controller;