import { faker } from '@faker-js/faker';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { useTypeORM } from '../typeorm';
import { StaffMemberEntity } from '../entity/staffMember.entity';

function getSampleStaffMembers(count: number): Array<{ fullName: string }> {
  const members = [];
  for (let i = 0; i < count; i++) {
    members.push({
      fullName: faker.person.fullName(),
    });
  }
  return members;
}

const STAFF_MEMBER_COUNT = 30;

export class SeedStaffMembers1713884463585 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const entity = await useTypeORM(StaffMemberEntity);
    await entity.save(getSampleStaffMembers(STAFF_MEMBER_COUNT));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
