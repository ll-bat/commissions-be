import {DataSource, EntityTarget, ObjectLiteral, Repository} from 'typeorm';

let typeORMDB: DataSource;


export default async function typeORMConnect(): Promise<void> {
    const {DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE} = process.env;

    const dataSource = new DataSource({
        type: "postgres",
        host: DB_HOST,
        port: parseInt(DB_PORT || "5432"),
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        entities: [`${__dirname}/entity/*.entity.ts`], // points to entities
        synchronize: true,
    });

    typeORMDB = await dataSource.initialize();
}


// Executes TypeORM query for the provided entity model
export function useTypeORM(
    entity: EntityTarget<ObjectLiteral>
): Repository<ObjectLiteral> {
    if (!typeORMDB) {
        throw new Error('TypeORM has not been initialized!');
    }

    return typeORMDB.getRepository(entity);
}

