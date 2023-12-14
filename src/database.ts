import "reflect-metadata";
import { DataSource } from "typeorm";
//migrations
import { Users1702504578819 } from "./migration/1702504578819-Users";
import { Appointments1702554406450 } from "./migration/1702554406450-Appointments";
import { Treatments1702556954028 } from "./migration/1702556954028-Treatments";
import { AppointmentsTreatments1702560663219 } from "./migration/1702560663219-Appointments_Treatments";
import { Reviews1702561884652 } from "./migration/1702561884652-Reviews";
//models

import { Appointments } from "./models/Appointments";
import { Treatments } from "./models/Treatments";
import { Reviews } from "./models/Reviews";
import { Users } from "./models/Users";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database:"appointment_scheduling", 
    entities:[Users, Appointments, Treatments, Reviews], 
    migrations:[Users1702504578819, Appointments1702554406450, Treatments1702556954028, AppointmentsTreatments1702560663219, Reviews1702561884652], 
    synchronize: true,
    logging: false,
})
