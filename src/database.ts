import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users1702653336802 } from "./migration/1702653336802-Users";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database:"appointment_scheduling", 
    entities:[], 
    migrations:[Users1702653336802], 
    synchronize: false,
    logging: false,
})
