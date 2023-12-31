import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
//models
import { Users } from "./models/Users";
import { Reviews } from "./models/Reviews";
import { Treatments } from "./models/Treatments";
import { Appointments } from "./models/Appointments";
//migrations
/*import { Users1703008272193 } from "./migration/1703008272193-Users";
import { Reviews1703009023633 } from "./migration/1703009023633-Reviews";
import { Treatments1703011213211 } from "./migration/1703011213211-Treatments";*/
import { Appointments1703008542263 } from "./migration/1703008542263-Appointments";

dotenv.config({});

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  migrations: [
    Appointments1703008542263,
    /*Users1703008272193,
    Appointments1703008542263,
    Treatments1703011213211,
    Reviews1703009023633,*/
  ],

  entities: [Users, Appointments, Treatments, Reviews],
  synchronize: true,
  logging: false,
});
