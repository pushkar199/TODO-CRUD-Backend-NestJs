import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TypeOrmModule } from '@nestjs/typeorm';



@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({default: false})
    isCompleted: boolean
}