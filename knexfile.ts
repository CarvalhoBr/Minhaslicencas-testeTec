// Update with your config settings.
import path from 'path';
import { Table } from 'knex'

const configuration = {

  development: {

    client: 'pg',
    connection: {
      host: 'database',
      user: 'docker',
      password: 'docker',
      database: 'api',
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },

  },

};

export default configuration;
