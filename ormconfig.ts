import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'example',
  password: process.env.POSTGRES_PASSWORD || 'example',
  database: process.env.POSTGRES_DATABASE || 'example',
  synchronize: false,
  logging: false,
  entities: ['dist/src/entity/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/databases/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: '/src/databases/migrations',
  },
};

export default config;
