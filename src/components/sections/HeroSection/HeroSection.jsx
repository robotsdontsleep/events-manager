import Carousel from 'components/Carousel/Carousel';
import SearchForm from 'components/SearchForm/SearchForm';

import { getTopEvents } from 'features/events/api';
import { getCategories } from 'features/categories/api';
import { getCities } from 'features/cities/api';

import styles from './HeroSection.module.css';

export default async function HeroSection() {
  const [topEvents, categories, cities] = await Promise.all([
    getTopEvents(),
    getCategories(),
    getCities(),
  ]);

  return (
    <section className={styles.herosection}>
      <div className={styles.glass}></div>

      <div className={styles.content}>
        <h1>Connecting the World</h1>
        <p>Easy to search, you just enter the keyword</p>
        <SearchForm categories={categories} cities={cities} />
        <Carousel items={topEvents} />
      </div>
    </section>
  );
}
