import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users1702653336802 } from "./migration/1702653336802-Users";
import { Appointments1702654139564 } from "./migration/1702654139564-Appointments";
import { Treatments1702656982301 } from "./migration/1702656982301-Treatments";
import { Reviews1702657687855 } from "./migration/1702657687855-Reviews";
import { Users } from "./models/Users";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database:"appointment_scheduling", 
    entities:[Users], 
    migrations:[Users1702653336802, Appointments1702654139564, Treatments1702656982301, Reviews1702657687855], 
    synchronize: false,
    logging: false,
})
