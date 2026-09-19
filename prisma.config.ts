import "dotenv/config"
import { defineConfig, env } from '@prisma/config';

export default defineConfig({
    schema: "src/prisma/schema.prisma",
    migrations: {
        seed: 'npx tsx src/db/seed.ts',
    },
    datasource: {
        url: env("DATABASE_URL"),
    },
});