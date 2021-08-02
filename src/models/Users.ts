import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export default class Users {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column()
    city: string;

    @Column()
    bairro: string;

    @Column()
    rua: string;

    @Column()
    number: number;

    @Column()
    reference: string;

    @Column()
    note: string;
    
}