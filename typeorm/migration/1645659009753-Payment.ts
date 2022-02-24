import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Payment1645659009753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "payments",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
            }, {
                name: "name",
                type: "varchar",
                length: "250",
                isNullable: false,
            }, {
                name: "createdAt",
                type: "datetime",
                default: "CURRENT_TIMESTAMP"
            }, {
                name: "updatedAt",
                type: "datetime",
                default: "CURRENT_TIMESTAMP"
            }]

        }));

        await queryRunner.createForeignKey("addresses", new TableForeignKey({
    
            columnNames: ["personId"],
            referencedColumnNames: ["id"],
            referencedTableName: "schedules",
            name: "FK_payment_schedules",
            onDelete: "CASCADE",
        }));
        }
       public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropForeignKey("payments", "FK_payments_schedules");
            await queryRunner.dropTable("payments");
        }
    
}

