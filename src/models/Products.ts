import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export default class Products {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    value: number;

    @Column()
    image: string;

    @Column()
    description: string;

    @Column()
    promotion: boolean;

    @Column()
    estoque: boolean;
    
}