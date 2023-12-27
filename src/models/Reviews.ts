import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Users } from "../models/Users";
import { Treatments } from "../models/Treatments";

@Entity("review")
export class Reviews extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_Id!: number;

  /*@Column()
  treatment_Id!: number;*/

  @Column()
  rating!: string;

  @Column()
  feedback!: string;

  @Column()
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  //@ManyToOne(() => Users, (user) => user) //revisar no me trae el .review
  //user!: Users;

  //@ManyToOne(() => Treatments, (treatment) => treatment)
  //treatment!: Treatments;
}
