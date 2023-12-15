import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Reviews1702657687855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "review",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "user_Id",
                  type: "int",
                },
                {
                  name: "treatment_Id",
                  type: "int",
                },
                {
                  name: "rating",
                  type: "varchar",
                  length: "50",
                },
                {
                  name: "feedback",
                  type: "varchar",
                  length: "200",
                },
                {
                  name: "status",
                  type: "varchar",
                  length: "50",
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
                  columnNames: ["user_Id"],
                  referencedTableName: "user",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
                {
                  columnNames: ["treatment_Id"],
                  referencedTableName: "treatment",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
              ],
            }),
            true
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("review");
    }
}
