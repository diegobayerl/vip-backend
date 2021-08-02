"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers1615488898060 = void 0;
const typeorm_1 = require("typeorm");
class createUsers1615488898060 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.createUsers1615488898060 = createUsers1615488898060;
