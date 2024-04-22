import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import IStaffMember from '../model/staff_member.model';

@Entity()
export class StaffMemberEntity implements IStaffMember {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar')
    full_name!: string;
}