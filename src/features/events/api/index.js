import { db } from 'db/connection';
import { events, cities, categories, dates, reviews } from 'db/schema';
import eventMapper from '../utils/eventMapper';
import { asc, desc, eq, gt, lt, sql } from 'drizzle-orm';

async function getEventRelations() {
  const [citiesList, categoriesList, datesList, reviewsList] = await Promise.all([
    db.select().from(cities),
    db.select().from(categories),
    db.select().from(dates),
    db.select().from(reviews),
  ]);

  return { citiesList, categoriesList, datesList, reviewsList };
}

export async function getEvents() {
  try {
    const [eventsList, relations] = await Promise.all([
      db.select().from(events),
      getEventRelations(),
    ]);
    return eventsList.map((event) => eventMapper(event, relations));
  } catch (error) {
    console.error('getEvents error:', error);
    throw new Error('Unable to load events. Please try again later.');
  }
}

export async function getEventById(id) {
  const [eventsList, relations] = await Promise.all([
    db.select().from(events).where(eq(events.id, id)).limit(1),
    getEventRelations(),
  ]);

  return eventMapper(eventsList[0], relations) || null;
}

export async function getEventsByField(field, value) {
  const [eventsList, relations] = await Promise.all([
    db.select().from(events).where(eq(events[field], value)),
    getEventRelations(),
  ]);

  return eventMapper(eventsList[0], relations) || null;
}

export async function getTopEvents() {
  try {
    const [topEvents, relations] = await Promise.all([
      db.select().from(events).orderBy(desc(events.searchCount)).limit(10),
      getEventRelations(),
    ]);
    return topEvents.map((event) => eventMapper(event, relations));
  } catch (error) {
    console.error('getTopEvents error:', error);
    throw new Error('Unable to load top events. Please try again later.');
  }
}

export async function getUpcomingEvents() {
  const currentDate = new Date().toISOString();
  try {
    const upcomingDates = await db
      .select()
      .from(dates)
      .where(gt(dates.dateTime, currentDate))
      .orderBy(asc(dates.dateTime))
      .limit(9);

    const eventIds = upcomingDates.map((d) => d.eventId);

    const upcomingEvents = await Promise.all(eventIds.map((id) => getEventById(id)));
    return upcomingEvents;
  } catch (error) {
    console.error('getUpcomingEvents error:', error);
    throw new Error('Unable to load upcoming events. Please try again later.');
  }
}

export async function getLatestEvents() {
  const currentDate = new Date().toISOString();

  try {
    const latestDates = await db
      .select()
      .from(dates)
      .where(lt(dates.dateTime, currentDate))
      .orderBy(desc(dates.dateTime))
      .limit(9);

    const eventIds = latestDates.map((d) => d.eventId);

    const latestEvents = await Promise.all(eventIds.map((id) => getEventById(id)));

    return latestEvents.sort((a, b) => Date.parse(b.dates[0]) - Date.parse(a.dates[0]));
  } catch (error) {
    console.error('getLatestEvents error:', error);
    throw new Error('Unable to load latest events. Please try again later.');
  }
}
