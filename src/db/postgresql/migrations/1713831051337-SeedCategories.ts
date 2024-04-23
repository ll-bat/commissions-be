import {MigrationInterface, QueryRunner} from "typeorm";
import {useTypeORM} from "../typeorm";
import {CategoryEntity} from "../entity/category.entity";
import {CategorySeed} from "../../seeding/category.seed";

export class SeedCategories1713831051337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const entity = await useTypeORM(CategoryEntity)
        await entity.save(CategorySeed)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // remove all categories
    }

}
