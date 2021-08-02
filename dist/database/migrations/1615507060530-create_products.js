"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducts1615507060530 = void 0;
const typeorm_1 = require("typeorm");
class createProducts1615507060530 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('products');
    }
}
exports.createProducts1615507060530 = createProducts1615507060530;
