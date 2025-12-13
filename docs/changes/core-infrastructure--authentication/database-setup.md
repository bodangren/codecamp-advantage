# Database Setup (Neon + Drizzle)

1. Create a Neon Postgres project and generate a database connection string.
   - Enable pooling and append `?sslmode=require` to the URL so Drizzle can connect from local dev.
2. Copy the connection string into `.env.local` as `DATABASE_URL=<connection>`.
3. Run `pnpm install` to make sure Drizzle CLI dependencies are available.
4. Apply the current schema to Neon:
   ```bash
   pnpm db:push
   ```
   If you prefer migrations, run `pnpm tsx lib/db/migrate.ts`.
5. Verify the table exists:
   ```bash
   pnpm db:studio
   ```
   Confirm the `users` table has columns `id`, `email`, `role`, `created_at`, `updated_at`.
6. If `pnpm db:push` fails:
   - Ensure the Neon branch is **primary** or allow non-primary writes.
   - Double-check `DATABASE_URL` includes the correct branch and password.
   - Retry after deleting failed migrations (`rm -rf lib/db/migrations/*`), then regenerate schema snapshots with `pnpm db:push`.
7. Share the Neon connection string securely (1Password) with the rest of the team so everyone can run migrations locally.

Once the table exists remotely, run `pnpm exec tsc --noEmit` and `pnpm build` to ensure the updated schema compiles.
