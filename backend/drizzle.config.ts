import { defineConfig } from 'drizzle-kit';
import assert from 'node:assert';

assert(process.env.DB_FILE_NAME, "Olvidaste configurar la DB");

export default defineConfig({ schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME,
  },
});
