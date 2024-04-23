import {EntityTarget, ObjectLiteral, Repository} from 'typeorm';
import dataSource from "./dataSource";

export default async function typeORMConnect(): Promise<void> {
    await dataSource.initialize();
}


// Executes TypeORM query for the provided entity model
export function useTypeORM(
    entity: EntityTarget<ObjectLiteral>
): Repository<ObjectLiteral> {
    if (!dataSource.isInitialized) {
        throw new Error('TypeORM has not been initialized!');
    }

    return dataSource.getRepository(entity);
}

