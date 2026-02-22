import { db } from "db/connection";
import { categories, events } from "db/schema";
import { sql } from "drizzle-orm";

export async function getCategories() {
  try {
    const categoriesList = await db.select().from(categories);
    return categoriesList;
  } catch (error) {
    console.error("getCategories error:", error);
    throw new Error("Unable to load categories. Please try again later!");
  }
}

export async function getEventsCountByCategories() {
  try {
    const categoryRows = await db
      .select({
        category: events.category,
        count: sql`COUNT(*)`,
      })
      .from(events)
      .groupBy(events.category);

    const countsByCategory = {};
    categoryRows.forEach((row) => {
      countsByCategory[row.category] = Number(row.count);
    });

    return countsByCategory;
  } catch (error) {
    console.error("getEventsCountByCategories error:", error);
  }
}
