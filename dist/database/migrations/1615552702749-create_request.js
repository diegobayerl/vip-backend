"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequest1615552702749 = void 0;
const typeorm_1 = require("typeorm");
class createRequest1615552702749 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'requests',
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
                    name: 'nameUser',
                    type: 'varchar',
                },
                {
                    name: 'telephone',
                    type: 'varchar',
                },
                {
                    name: 'idUser',
                    type: 'integer',
                },
                {
                    name: 'idProduct',
                    type: 'integer',
                },
                {
                    name: 'nameProduct',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'value',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'quantidade',
                    type: 'integer',
                },
                {
                    name: 'entrega',
                    type: 'varchar',
                },
                {
                    name: 'valorEntrega',
                    type: 'decimal',
                    scale: 5,
                    precision: 2,
                },
                {
                    name: 'valorTotal',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'formaPag',
                    type: 'varchar',
                },
                {
                    name: 'bandeira',
                    type: 'varchar',
                },
                {
                    name: 'valorCliente',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'troco',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'hora',
                    type: 'varchar',
                },
                {
                    name: 'dateCreate',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'boolean',
                    default: true,
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('requests');
    }
}
exports.createRequest1615552702749 = createRequest1615552702749;
