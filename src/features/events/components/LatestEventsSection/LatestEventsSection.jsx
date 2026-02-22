import Slider from 'components/SwiperSlider/Slider';
import { Section } from 'components/sections/Section';

import LatestEventCard from './LatestEventCard';
import { getLatestEvents } from 'features/events/api';

export default async function LatestEventsSection() {
  const latestEvents = await getLatestEvents();
  const content = <Slider items={latestEvents} slideItem={LatestEventCard} />;

  return <Section title="Our Latest Events" description="News From Our Blog" content={content} />;
}
