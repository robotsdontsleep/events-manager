import { pgTable, serial, text, integer, numeric, boolean, timestamp } from 'drizzle-orm/pg-core';

export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  value: text('value').notNull(), // "san-antonio"
  name: text('name').notNull(), // "San Antonio"
  image: text('image').notNull(), // URL
});

/* --------------------  CATEGORIES  -------------------- */

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  value: text('value').notNull(),
  name: text('name').notNull(),
  image: text('image').notNull(),
});

/* --------------------  EVENTS  -------------------- */

export const events = pgTable('events', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  category: text('category').notNull(),
  image: text('image').notNull(),
  description: text('description').notNull(),
  searchCount: integer('search_count').notNull(),

  venue: text('venue').notNull(),
  street: text('street').notNull(),
  postalCode: text('postal_code').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  country: text('country').notNull(),

  priceAmount: numeric('price_amount').notNull(),
  priceCurrency: text('price_currency').notNull(),
});

/* --------------------  EVENT DATES (dateTime array) -------------------- */

export const dates = pgTable('dates', {
  id: serial('id').primaryKey(),
  eventId: text('eventId')
    .references(() => events.id)
    .notNull(),
  dateTime: text('date_time').notNull(), // ISO string for each date
});

/* --------------------  EVENT REVIEWS -------------------- */

export const reviews = pgTable('reviews', {
  id: text('id').primaryKey(), // "review-001"
  eventId: text('eventId')
    .references(() => events.id)
    .notNull(),
  userName: text('user_name').notNull(),
  text: text('text').notNull(),
  date: text('date').notNull(),
  rating: integer('rating').notNull(),
});

/* --------------------  AUTH TABLES  -------------------- */

export const user = pgTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  userAgent: text('user_agent'),
  ipAddress: text('ip_address'),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
});

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  password: text('password'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});
