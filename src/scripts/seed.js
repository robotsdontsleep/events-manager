import 'dotenv/config';
import fs from 'fs';
import path from 'path';

import { db } from '../db/connection.js';
import { cities, categories, events, dates, reviews } from '../db/schema.js';

/* absolute dirname for ESM */
const __dirname = new URL('.', import.meta.url).pathname;

/* helper */
const read = (relativePath) => {
  const filePath = path.join(__dirname, relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

async function seed() {
  console.log('🌱 Seeding database...');

  /* ---------- CITIES ---------- */
  const { cities: citiesData } = read('../data/cities.json');
  await db.insert(cities).values(citiesData);

  /* ---------- CATEGORIES ---------- */
  const { categories: categoriesData } = read('../data/categories.json');
  await db.insert(categories).values(categoriesData);

  /* ---------- EVENTS ---------- */
  const { events: eventsData } = read('../data/events.json');

  for (const event of eventsData) {
    /* events table */
    await db.insert(events).values({
      id: event.id,
      name: event.name,
      category: event.category,
      image: event.image,
      description: event.description,
      searchCount: event.searchCount,

      venue: event.location.venue,
      street: event.location.address.street,
      postalCode: event.location.address.postalCode,
      city: event.location.address.city,
      state: event.location.address.state,
      country: event.location.address.country,

      priceAmount: event.price.amount,
      priceCurrency: event.price.currency,
    });

    /* dates table */
    if (event.dateTime?.length) {
      await db.insert(dates).values(
        event.dateTime.map((d) => ({
          eventId: event.id,
          dateTime: d,
        }))
      );
    }

    /* reviews table */
    if (event.reviews?.length) {
      await db.insert(reviews).values(
        event.reviews.map((r) => ({
          id: r.id,
          eventId: event.id,
          userName: r.userName,
          text: r.text,
          date: r.date,
          rating: r.rating,
        }))
      );
    }
  }

  console.log('✅ Seed completed successfully');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});