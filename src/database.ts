import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users1702653336802 } from "./migration/1702653336802-Users";
import { Appointments1702654139564 } from "./migration/1702654139564-Appointments";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database:"appointment_scheduling", 
    entities:[], 
    migrations:[Users1702653336802, Appointments1702654139564], 
    synchronize: false,
    logging: false,
})
