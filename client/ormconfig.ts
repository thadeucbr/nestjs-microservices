import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@Thadeu12',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: ['build/**/*.entity.{ts,js}'],
};

export default config;
