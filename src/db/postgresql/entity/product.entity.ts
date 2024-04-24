import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from 'typeorm';
import IProduct from '../model/product.model';
import { CategoryEntity } from './category.entity';

@Entity()
export class ProductEntity implements IProduct {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  name!: string;

  @Column('decimal')
  price!: number;

  @Column('decimal', { nullable: true })
  commissionPercent!: number | null;

  @ManyToOne(() => CategoryEntity)
  category: CategoryEntity;
}
