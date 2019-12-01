// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    // add useNullasdefault
    useNullAsDefault: true,
    connection: {
      //change file to database
      database: process.env.DB_DEV_DATABASE,
      user: process.env.DB_DEV_USER,
      // password: process.env.DB_DEV_PASSWORD

    },
    // migrations and seeds
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
    
  },

  production: {
    client: 'pg',
    // add the environment of DATABASE_URL
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
