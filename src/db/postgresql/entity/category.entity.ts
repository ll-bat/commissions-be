import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import ICategory from '../model/cateogry.model';

@Entity()
export class CategoryEntity implements ICategory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  name!: string;
}
