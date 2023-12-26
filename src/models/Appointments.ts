import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";

import { Users } from "../models/Users";
import { Treatments } from "./Treatments";

@Entity("appointment")
export class Appointments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  status!: string;

  @Column()
  date!: Date;

  @Column()
  time!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Users, (user) => user.appointments)
  user!: Users;

  @ManyToMany(
    () => Treatments,
    (treatment: Treatments) => treatment.appointments
  )
  treatments!: Treatments[];
}
