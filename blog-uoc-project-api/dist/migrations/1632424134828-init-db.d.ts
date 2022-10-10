import { MigrationInterface, QueryRunner } from "typeorm";
export declare class initDb1632424134828 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
