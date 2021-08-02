import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1615488898060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
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
                    name: 'telephone',
                    type: 'varchar',
                },
                {
                    name: 'city',
                    type: 'varchar',
                },
                {
                    name: 'bairro',
                    type: 'varchar',
                },
                {
                    name: 'rua',
                    type: 'varchar',
                },
                {
                    name: 'number',
                    type: 'integer',
                },
                {
                    name: 'reference',
                    type: 'text',
                },
                {
                    name: 'note',
                    type: 'text',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
