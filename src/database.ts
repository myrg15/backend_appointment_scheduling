import "reflect-metadata";
import { DataSource } from "typeorm";
//migrations
import { Users1702504578819 } from "./migration/1702504578819-Users";

//models
import { Users } from "./models/Users";
import { Appointments } from "./models/Appointments";
import { Reviews } from "./models/Reviews";
import { Treatments } from "./models/Treatments";
import { AppointmentTreatment } from "./models/AppointmentTreatment";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database:"appointment_scheduling", 
    entities:[Users, Appointments, Reviews, Treatments, AppointmentTreatment], 
    migrations:[Users1702504578819], 
    synchronize: true,
    logging: false,
})
