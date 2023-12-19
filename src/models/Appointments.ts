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
} from "typeorm";

import { Users } from "../models/Users";

@Entity("appointment")
export class Appointments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_Id!: number;

  @Column()
  name!: string;

  @Column()
  status!: string;

  @Column()
  date!: Date;

  @Column()
  time!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @ManyToMany(() => Users)
  @JoinTable({
    name: "appointment",
  })
  user!: Users[];
}
