/*
 * SPDX-FileCopyrightText: syuilo and other misskey contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class AvatarDecorationBsk1698949218542 {
    name = 'AvatarDecorationBsk1698949218542'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "avatar_decoration" ADD "createdAt" TIMESTAMP WITH TIME ZONE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "avatar_decoration" DROP COLUMN ""createdAt"`);    }
}
