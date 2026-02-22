import { Category } from "./Category";
import { getCategories, getEventsCountByCategories } from "../api";

import styles from "./Category.module.css";

export default async function CategoryList() {
  const categories = await getCategories();
  const counts = await getEventsCountByCategories();

  return (
    <ul className={styles.list}>
      {categories.map((category) => {
        return (
          <li key={category.id} className={styles.item}>
            <Category {...category} eventsCount={counts[category.value]} />
          </li>
        );
      })}
    </ul>
  );
}
