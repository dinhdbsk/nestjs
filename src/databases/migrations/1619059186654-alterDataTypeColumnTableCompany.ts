import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterDataTypeColumnTableCompany1619059186654 implements MigrationInterface {
  name = 'alterDataTypeColumnTableCompany1619059186654';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('company', 'phone_number', new TableColumn({
      name: 'phone_number',
      type: 'int',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.changeColumn('company', 'phone_number', new TableColumn({
          name: 'phone_number',
          type: 'varchar',
      }));
  }

}
