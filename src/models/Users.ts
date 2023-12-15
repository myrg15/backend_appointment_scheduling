import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  role!: string;

  @Column()
  status!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;
}
