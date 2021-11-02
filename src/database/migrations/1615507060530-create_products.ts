import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProducts1615507060530 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'value',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'image',
                    type: 'text',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'promotion',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'estoque',
                    type: 'boolean',
                    default: true,
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
