import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1711347134315 implements MigrationInterface {
  name = 'Test1711347134315';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "login" character varying NOT NULL, "password" character varying NOT NULL, "version" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "artist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "grammy" boolean NOT NULL, CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "album" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "year" integer NOT NULL, "artist_id" uuid, CONSTRAINT "PK_58e0b4b8a31bb897e6959fe3206" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "track" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "artist_id" uuid, "album_id" uuid, "duration" integer NOT NULL, CONSTRAINT "PK_0631b9bcf521f8fab3a15f2c37e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "favorite_track" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "track_id" uuid NOT NULL, CONSTRAINT "PK_919a46033d84cebe3f7c405fe50" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "favorite_artist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "artist_id" uuid NOT NULL, CONSTRAINT "PK_62b62ed38bf0e76f54a5609f9ae" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "favorite_album" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "album_id" uuid NOT NULL, CONSTRAINT "PK_8b1f4c021579fa1631fcc0b6377" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "album" ADD CONSTRAINT "FK_ecbc0c0cfffc519f7f2407b0465" FOREIGN KEY ("artist_id") REFERENCES "artist"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "track" ADD CONSTRAINT "FK_ee355f43e4481bb45755c50e984" FOREIGN KEY ("artist_id") REFERENCES "artist"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "track" ADD CONSTRAINT "FK_5902805b5cdc8b4fcf983f7df52" FOREIGN KEY ("album_id") REFERENCES "album"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "favorite_track" ADD CONSTRAINT "FK_742ce9682c4da13bba6baec6493" FOREIGN KEY ("track_id") REFERENCES "track"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "favorite_artist" ADD CONSTRAINT "FK_c180f6299cca784da231265d0fd" FOREIGN KEY ("artist_id") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "favorite_album" ADD CONSTRAINT "FK_de49c98d95ee64924736b32e666" FOREIGN KEY ("album_id") REFERENCES "album"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "favorite_album" DROP CONSTRAINT "FK_de49c98d95ee64924736b32e666"`,
    );
    await queryRunner.query(
      `ALTER TABLE "favorite_artist" DROP CONSTRAINT "FK_c180f6299cca784da231265d0fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "favorite_track" DROP CONSTRAINT "FK_742ce9682c4da13bba6baec6493"`,
    );
    await queryRunner.query(
      `ALTER TABLE "track" DROP CONSTRAINT "FK_5902805b5cdc8b4fcf983f7df52"`,
    );
    await queryRunner.query(
      `ALTER TABLE "track" DROP CONSTRAINT "FK_ee355f43e4481bb45755c50e984"`,
    );
    await queryRunner.query(
      `ALTER TABLE "album" DROP CONSTRAINT "FK_ecbc0c0cfffc519f7f2407b0465"`,
    );
    await queryRunner.query(`DROP TABLE "favorite_album"`);
    await queryRunner.query(`DROP TABLE "favorite_artist"`);
    await queryRunner.query(`DROP TABLE "favorite_track"`);
    await queryRunner.query(`DROP TABLE "track"`);
    await queryRunner.query(`DROP TABLE "album"`);
    await queryRunner.query(`DROP TABLE "artist"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
