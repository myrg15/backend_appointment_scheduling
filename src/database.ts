import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "mysql",
    password: "123456789",
    database:"appointment_scheduling", 
    //entities: 
    //migrations: 
    synchronize: true,
    logging: false,
})