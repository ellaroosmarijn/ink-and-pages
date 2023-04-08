import { join } from 'node:path'

interface KnexConfig {
  [key: string]: object
}

const development = {
  client: 'sqlite3',
  connection: {
    filename: join(__dirname, './dev.sqlite3'),
  },
  migrations: {
    directory: join(__dirname, 'migrations'),
  },
  seeds: {
    directory: join(__dirname, 'seeds'),
  },
}

const knexConfig: KnexConfig = {
  development,
  test: development,

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

export default knexConfig
