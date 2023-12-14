import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Users } from "../models/Users";
import { Treatments } from "./Treatments";

@Entity("appointments")
export class Appointments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_Id!: number;

  @Column()
  status!: string;

  @Column()
  date!: Date;

  @Column()
  time!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @ManyToOne(() => Users, (users) => users.appointments)
  @JoinColumn({ name: "user_Id" })
  user!: Users;

  @ManyToMany(() => Treatments)
  @JoinTable({
    name: "appointment_Treatments"
    })
    treatments!: Treatments [];
  }
