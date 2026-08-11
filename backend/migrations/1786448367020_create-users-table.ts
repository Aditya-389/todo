import type { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.createTable('users', {
        id: 'id',
        full_name: { type: 'varchar(255)', notNull: true },
        email: { type: 'varchar(255)', unique: true, notNull: true },
        password_hash: { type: 'varchar(255)', notNull: true },
    });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable('users');
}


/*
Quick note on each part:

shorthands — optional. Lets you define reusable column shortcuts (e.g. define id once, reuse across migrations). Leave it undefined unless you have repeated column patterns across many tables.
up — where you define the schema change.
down — where you reverse it (for rollback).

*/

