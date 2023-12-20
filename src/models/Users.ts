import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Reviews } from "./Reviews";
@Entity("user")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  last_name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  phone_number!: string;

  @Column()
  address!: string;

  @Column({ default: "user" })
  role!: string;

  @Column({ default: "active" })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  /*@OneToMany(() => Reviews, (review) => review.user)
  reviews!: Reviews[];*/
}
