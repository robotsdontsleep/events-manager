import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import * as schema from 'db/schema';
import { db } from 'db/connection';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      verification: schema.verification,
    },
  }),
  baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  emailAndPassword: {
    enabled: true,
  },
});
