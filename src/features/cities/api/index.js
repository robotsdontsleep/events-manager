import { db } from "db/connection";
import { cities, events } from "db/schema";
import { sql } from "drizzle-orm";

export async function getCities() {
  const citiesList = await db.select().from(cities);
  return citiesList;
}

export async function getEventsCountByCities() {
  try {
    const cityRows = await db
      .select({
        city: events.city,
        count: sql`COUNT(*)`,
      })
      .from(events)
      .groupBy(events.city);

    const countsByCity = {};
    cityRows.forEach((row) => {
      countsByCity[row.city] = Number(row.count);
    });

    return countsByCity;
  } catch (error) {
    console.error("getEventsCountByCities error:", error);
  }
}
