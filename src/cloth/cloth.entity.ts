import { User } from "src/user/user.entity";
import { Location } from "src/location/location.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cloth{

    @PrimaryGeneratedColumn()
    id! : number

    @Column({length: 200, nullable:false})
    description!: string

    @Column({length: 50})
    type!: string
    
    @Column({length: 3})
    size!: string

    @ManyToOne(() => User, (user) => user.clothes)
    user: User
    
    @ManyToOne(() => Location, (location) => location.clothes)
    location: Location

}