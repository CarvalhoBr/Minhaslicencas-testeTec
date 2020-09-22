// Update with your config settings.
import path from 'path';

const configuration = {

  development: {

    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'docker',
      password: 'docker',
      database: 'db',
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
