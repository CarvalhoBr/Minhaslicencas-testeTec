import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('carros', (table) => {
        table.increments('id').primary();
        table.string('veiculo').notNullable();
        table.string('marca').notNullable();
        table.integer('ano').notNullable();
        table.text('descricao').notNullable();
        table.boolean('vendido').defaultTo(false).notNullable();
        table.dateTime('created', {precision: 6}).defaultTo(knex.fn.now(6)).notNullable();
        table.dateTime('updated', {precision: 6}).defaultTo(knex.fn.now(6)).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('carros')
}

