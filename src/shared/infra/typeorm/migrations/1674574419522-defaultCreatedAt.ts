import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class defaultCreatedAt1674574419522 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("specifications_cars", "created_at");

    await queryRunner.addColumn(
      "specifications_cars",
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "CURRENT_TIMESTAMP",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("specifications_cars", "created_at");

    await queryRunner.addColumn(
      "specifications_cars",
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "now()",
      })
    );
  }
}
