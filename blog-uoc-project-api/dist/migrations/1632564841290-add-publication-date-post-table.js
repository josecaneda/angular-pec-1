"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPublicationDatePostTable1632564841290 = void 0;
class addPublicationDatePostTable1632564841290 {
    constructor() {
        this.name = 'addPublicationDatePostTable1632564841290';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."posts" ADD "publication_date" TIMESTAMP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."posts" DROP COLUMN "publication_date"`);
    }
}
exports.addPublicationDatePostTable1632564841290 = addPublicationDatePostTable1632564841290;
//# sourceMappingURL=1632564841290-add-publication-date-post-table.js.map