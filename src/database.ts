import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

import { Users1703008272193 } from "./migration/1703008272193-Users";
import { Reviews1703009023633 } from "./migration/1703009023633-Reviews";
import { Treatments1703011213211 } from "./migration/1703011213211-Treatments";
import { Appointments1703008542263 } from "./migration/1703008542263-Appointments";

import { Users } from "./models/Users";
import { Reviews } from "./models/Reviews";
import { Treatments } from "./models/Treatments";
import { Appointments } from "./models/Appointments";

dotenv.config({});

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  //npx typeorm migration:create ./src/migration/Treatments
  //npx typeorm-ts-node-commonjs migration:run -d ./src/database.ts
  migrations: [
    Appointments1703008542263,
    /*Users1703008272193,
    Appointments1703008542263,
    Treatments1703011213211,
    Reviews1703009023633,*/
  ],
  //npx typeorm entity:create ./src/models/Users
  entities: [Users, Appointments, Treatments, Reviews],
  synchronize: true,
  logging: false,
});
