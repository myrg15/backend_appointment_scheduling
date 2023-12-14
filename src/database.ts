import "reflect-metadata";
import { DataSource } from "typeorm";
//migrations
import { Users1702504578819 } from "./migration/1702504578819-Users";
import { Appointments1702554406450 } from "./migration/1702554406450-Appointments";
import { Treatments1702556954028 } from "./migration/1702556954028-Treatments";
import { AppointmentsTreatments1702560663219 } from "./migration/1702560663219-Appointments_Treatments";
//models
import { Users } from "./models/Users";
import { Appointments } from "./models/Appointments";
import { Treatments } from "./models/Treatments";
import { AppointmentTreatment } from "./models/AppointmentTreatment";
import { Reviews } from "./models/Reviews";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database:"appointment_scheduling", 
    entities:[Users, Appointments, Treatments, AppointmentTreatment, Reviews], 
    migrations:[Users1702504578819, Appointments1702554406450, Treatments1702556954028, AppointmentsTreatments1702560663219], 
    synchronize: true,
    logging: false,
})
