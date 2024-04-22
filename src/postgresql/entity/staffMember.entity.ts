import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import IStaffMember from '../model/staffMember.model';

@Entity()
export class StaffMemberEntity implements IStaffMember {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar')
    fullName!: string;
}