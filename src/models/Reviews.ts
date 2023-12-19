import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Users } from "../models/Users";
import { Treatments } from "../models/Treatments";

@Entity("review")
export class Reviews extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_Id!: number;

  @Column()
  treatment_Id!: number;

  @Column()
  rating!: string;

  @Column()
  feedback!: string;

  @Column()
  status!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @ManyToOne(() => Users, (user) => user.reviews) //revisar no me trae el .review
  user!: Users;

  @ManyToOne(() => Treatments, (treatment) => treatment.reviews)
  treatments!: Treatments;
}
