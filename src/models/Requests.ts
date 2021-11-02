import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('requests')
export default class Requests {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nameUser: string;

    @Column()
    telephone: string;

    @Column()
    idUser: number;

    @Column()
    idProduct: number;

    @Column()
    nameProduct: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    quantidade: number;

    @Column()
    entrega: string;

    @Column()
    valorEntrega: number;

    @Column()
    valorTotal: number;

    @Column()
    formaPag: string;

    @Column()
    bandeira: string;

    @Column()
    valorCliente: number;

    @Column()
    troco: number;

    @Column()
    hora: string;

    @Column()
    dateCreate: string;

    @Column()
    status: boolean;

    @Column()
    statusEntrega: string;
}

