import { Cloth } from "src/cloth/cloth.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Location {
    
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({length: 100, nullable: false})
    description: string

    @OneToMany(() => Cloth, (cloth) => cloth.location)
    clothes: Cloth[]
    
}