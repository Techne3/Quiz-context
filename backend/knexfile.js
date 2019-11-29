require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		useNullAsDefault: true,
		connection: {
			database: process.env.DB_DEV_DATABASE,
			user: process.env.DB_DEV_USER
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'pg',
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
	},
	testing: {
		client: 'pg',
		connection: {
			filename: 'postgres://localhost/testing',
			database: process.env.DB_DEV_DATABASE_TESTING,
			user: process.env.DB_DEV_USER
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations/'
		},
		seeds: {
			directory: './data/seeds/'
		},
	
		
	}
};