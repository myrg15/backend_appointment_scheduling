import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1702504578819 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
          },
          {
            name: "last_name",
            type: "varchar",
            length: "100",
          },
          {
            name: "phone_number",
            type: "varchar",
            length: "20",
          },
          {
            name: "address",
            type: "varchar",
            length: "100",
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
            length: "300",
          },
          {
            name: "role",
            type: "enum",
            enum: ["user", "admin", "super_admin"],
            default: '"user"',
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
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
