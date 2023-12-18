import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

import { Users } from "./models/Users";
import { Reviews } from "./models/Reviews";
import { Treatments } from "./models/Treatments";
import { Appointments } from "./models/Appointments";

import { Users1702930737798 } from "./migration/1702930737798-Users";
import { Reviews1702934439449 } from "./migration/1702934439449-Reviews";
import { Treatments1702932913324 } from "./migration/1702932913324-Treatments";
import { Appointments1702931883584 } from "./migration/1702931883584-Appointments";

dotenv.config({});

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "appointment_scheduling",
  entities: [Users, Appointments, Treatments, Reviews],
  migrations: [
    Users1702930737798,
    Appointments1702931883584,
    Treatments1702932913324,
    Reviews1702934439449,
  ],
  synchronize: false,
  logging: false,
});
