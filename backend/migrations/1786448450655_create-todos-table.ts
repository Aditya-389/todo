import type { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.createTable('todos', {
        id: "id",
        title: { type: 'varchar(255)', notNull: true },
        description: { type: 'varchar(255)' },
        is_completed: { type: 'boolean', default: false },
        user_id: {
            type: 'integer',
            notNull: true,
            references: 'users',
            onDelete: 'CASCADE'  
        }
    });

    pgm.createIndex('todos', 'user_id'); // get todos for this user
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable('todos');
}


/*
onDelete : "CASCADE" -->  when user is deleted all the todos of that user also deleted (Suits our project)
onDelete : "SET NULL" --> SET NULL just means "don't crash, sever the link, todo becomes ownerless forever" — unless you build recovery logic yourself, which is a separate feature.

*/