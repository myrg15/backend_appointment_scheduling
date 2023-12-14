import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AppointmentTreatment1702509687020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "appointmentTreatment",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "appointment_Id",
                  type: "int",
                },
                {
                  name: "treatment_Id",
                  type: "int",
                },
              ],
              foreignKeys: [
                {
                  columnNames: ["appointment_Id"],
                  referencedTableName: "appointments",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
                {
                  columnNames: ["treatment_Id"],
                  referencedTableName: "treatments",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
              ],
            }),
            true
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointmentTreatment");
    }

}
