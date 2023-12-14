import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Treatments1702556954028 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "treatments",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "review_Id",
            type: "int",
          },
          {
            name: "appointment_Id",
            type: "int",
          },
          {
            name: "name_treatment",
            type: "varchar",
            length: "200",
          },
          {
            name: "description",
            type: "varchar",
            length: "500",
          },
          {
            name: "duration_treatment",
            type: "varchar",
            length: "50",
          },
          {
            name: "img_url",
            type: "varchar",
            length: "512",
            isUnique: true,
          },
          {
            name: "status",
            type: "varchar",
            length: "50",
          },
          {
            name: "date",
            type: "timestamp",
          },
          {
            name: "time",
            type: "timestamp",
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["review_Id"],
            referencedTableName: "reviwes",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["appointment_Id"],
            referencedTableName: "appointments",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("treatments");
  }
}
