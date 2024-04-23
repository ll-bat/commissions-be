import {DataSource} from "typeorm";
import "../../loadDotenv"

const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [`${__dirname}/entity/*.entity.ts`], // points to entities
    migrations: [`${__dirname}/migrations/*.ts`]
});

export default dataSource;