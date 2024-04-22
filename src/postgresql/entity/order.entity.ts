import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import IOrder from '../model/order.model';
import {ProductEntity} from "./product.entity";
import {StaffMemberEntity} from "./staff_member.entity";

@Entity()
export class OrderEntity implements IOrder {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToMany(() => ProductEntity)
    @JoinTable()
    products: ProductEntity[]

    @ManyToOne(() => StaffMemberEntity)
    staffMember: StaffMemberEntity

    @Column('date')
    date: Date
}