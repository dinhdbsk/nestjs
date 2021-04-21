import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class alterTableCompany1619058219853 implements MigrationInterface {
  name = 'alterTableCompany1619058219853';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('company', 'phone', 'phone_number');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('company', 'phone_number', 'phone');
  }

}
