import Slider from 'components/Slider/Slider';
import { Section } from 'components/sections/Section';
import { CityCard } from './CityCard';

import { getCities, getEventsCountByCities } from '../api';

export default async function CitiesSection() {
  const cities = await getCities();
  const counts = await getEventsCountByCities();

  const citiesWithCounts = cities.map((city) => ({
    ...city,
    eventsCount: counts[city.value] || 0,
  }));

  const content = (
    <Slider
      items={citiesWithCounts}
      slideItem={CityCard}
      itemWidth={300}
      gap={40}
      visibleCount={5}
      autoplay={true}
    />
  );

  return (
    <Section
      title="Most Visited Places"
      description="Find inspiring places worth visiting next"
      content={content}
      bg={true}
    />
  );
}
