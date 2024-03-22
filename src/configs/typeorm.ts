import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `${process.env.POSTGRESDB_HOST}`,
  port: `${process.env.POSTGRESDB_LOCAL_PORT}`,
  username: `${process.env.POSTGRESDB_USER}`,
  password: `${process.env.POSTGRESDB_PASSWORD}`,
  database: `${process.env.POSTGRESDB_DATABASE}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
