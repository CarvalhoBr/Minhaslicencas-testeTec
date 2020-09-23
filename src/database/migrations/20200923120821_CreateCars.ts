import * as Knex from "knex";
import onUpdateTrigger from "../triggers/onUpdateTrigger";


export async function up(knex: Knex): Promise<void> {
    knex.schema.createTable('carros', (table) => {
        table.increments('id').primary();
        table.string('veiculo').notNullable();
        table.string('marca').notNullable();
        table.integer('ano').notNullable();
        table.text('descricao').notNullable();
        table.boolean('vendido').defaultTo(false).notNullable();
        table.timestamps(true, true)
    }).then(() => knex.raw(onUpdateTrigger('carros')))

}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('carros')
}