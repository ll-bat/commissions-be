import { faker } from '@faker-js/faker';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { useTypeORM } from '../typeorm';
import { CategoryEntity } from '../entity/category.entity';

function getSampleCategories(count: number): Array<{ name: string }> {
  const categories = [];
  for (let i = 0; i < count; i++) {
    categories.push({
      name: faker.commerce.product(),
    });
  }
  return categories;
}

const CATEGORY_COUNT = 30;

export class SeedCategories1713831051337 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const entity = await useTypeORM(CategoryEntity);
    await entity.save(getSampleCategories(CATEGORY_COUNT));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // remove all categories
  }
}
