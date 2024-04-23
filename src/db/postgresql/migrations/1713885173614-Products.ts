import {faker} from "@faker-js/faker";
import {MigrationInterface, QueryRunner} from "typeorm";
import {useTypeORM} from "../typeorm";
import {ProductEntity} from "../entity/product.entity";
import {CategoryEntity} from "../entity/category.entity";

async function getSampleProducts(count: number) {
    const categoriesEntity = await useTypeORM(CategoryEntity)
    const categories = await categoriesEntity.find()

    const products = []
    for (let i = 0; i < count; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: faker.commerce.price({min: 1, max: 100}),
            commissionPercent: faker.number.int({min: 0, max: 50}),
            category: categories[faker.number.int({min: 0, max: categories.length - 1})]
        })
    }
    return products;
}

const PRODUCTS_COUNT = 1000;

export class Products1713885173614 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const entity = await useTypeORM(ProductEntity)
        const sampleProducts = await getSampleProducts(PRODUCTS_COUNT)
        await entity.save(sampleProducts)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
