import { Cloth } from "src/cloth/cloth.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({length: 100})
    name: string
    
    @Column({length: 255})
    email: string
    
    @Column()
    isActive: boolean

    @OneToMany(() => Cloth, (cloth) => cloth.user)
    clothes: Cloth[]
}