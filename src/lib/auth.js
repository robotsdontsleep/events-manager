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
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    trustHost: true,
    crossOrigin: {
      enabled: true,
      allowedOrigins: [
        'https://events-manager-virid.vercel.app',
        'https://events-manager-epo1j87ga-robotsdontsleep.vercel.app',
      ],
    },
  },
});
