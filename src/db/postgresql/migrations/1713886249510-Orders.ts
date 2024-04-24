import { faker } from '@faker-js/faker';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { useTypeORM } from '../typeorm';
import { ProductEntity } from '../entity/product.entity';
import { StaffMemberEntity } from '../entity/staffMember.entity';
import { chooseRandomMultiple, chooseRandom } from '../../../utils';
import { OrderEntity } from '../entity/order.entity';

async function getSampleOrders(count: number) {
  const productsEntity = await useTypeORM(ProductEntity);
  const products = await productsEntity.find();
  const staffMembersEntity = await useTypeORM(StaffMemberEntity);
  const staffMembers = await staffMembersEntity.find();

  const orders = [];
  for (let i = 0; i < count; i++) {
    const orderProductsCount = faker.number.int({ min: 1, max: 5 });
    orders.push({
      products: chooseRandomMultiple(products, orderProductsCount),
      staffMember: chooseRandom(staffMembers),
      date: faker.date.between({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 3, 23),
      }),
    });
  }

  return orders;
}

const ORDERS_COUNT = 1000;

export class Orders1713886249510 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const entity = await useTypeORM(OrderEntity);
    const sampleOrders = await getSampleOrders(ORDERS_COUNT);
    await entity.save(sampleOrders);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
