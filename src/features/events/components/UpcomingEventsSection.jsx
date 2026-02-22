import Slider from 'components/Slider/Slider';
import { Section } from 'components/sections/Section';

import { EventCard } from './EventCard/EventCard';
import { getUpcomingEvents } from '../api';

export default async function UpcomingEventsSection() {
  const upcomingEvents = await getUpcomingEvents();

  const content = (
    <Slider
      items={upcomingEvents}
      slideItem={EventCard}
      itemWidth={400}
      gap={40}
      visibleCount={3}
    />
  );

  return (
    <Section
      title="Upcoming Events"
      description="Explore upcoming activities and plan your next experience with ease"
      content={content}
      bg={true}
    />
  );
}
