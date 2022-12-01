import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm'

@Entity()
export class Group {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    creater: string

    @CreateDateColumn()
    createdAt: Date
}
