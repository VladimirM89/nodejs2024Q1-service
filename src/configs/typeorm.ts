import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

export const config: DataSourceOptions = {
  type: 'postgres',
  host: `${process.env.POSTGRESDB_HOST}`,
  port: Number(`${process.env.POSTGRESDB_LOCAL_PORT}`),
  username: `${process.env.POSTGRESDB_USER}`,
  password: `${process.env.POSTGRESDB_PASSWORD}`,
  database: `${process.env.POSTGRESDB_DATABASE}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  synchronize: false,
};

const connectionSource = new DataSource(config);
export default connectionSource;
