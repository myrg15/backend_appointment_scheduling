import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Users } from "./Users";
import { Treatments } from "./Treatments";

@Entity("reviews")
export class Reviews extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    userId!: number;

    @Column()
    treatment_Id!: number;
    
    @Column()
    punctuation!: string;
  
    @Column()
    comment!: string;

    @Column()
    status!: string;
    
    @CreateDateColumn()
    createdDate!: Date;
  
    @UpdateDateColumn()
    updatedDate!: Date;
  
    @ManyToOne(() => Users, (users) => users.reviews)
    @JoinColumn ({name: "users"})
    user!: Users;
 
    @ManyToOne(() => Treatments, (treatments) => treatments.reviews)
    @JoinColumn ({name: "treatments"})
    treatment!: Treatments;
 
}
