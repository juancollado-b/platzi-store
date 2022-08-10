import { registerAs } from '@nestjs/config';
export default registerAs('config', () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
  },
  port: process.env.PORT || 3000,
}));
