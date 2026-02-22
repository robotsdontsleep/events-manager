import HeroSection from 'components/sections/HeroSection/HeroSection';
import HowItWorksSection from 'components/sections/HowItWorksSection/HowItWorksSection';
import LatestEventsSection from 'features/events/components/LatestEventsSection/LatestEventsSection';
import CategoryList from 'features/categories/components/CategoryList';
import CitiesSection from 'features/cities/components/CitiesSection';
import UpcomingEventsSection from 'features/events/components/UpcomingEventsSection';
import SubscribeSection from 'components/sections/SubscribeSection/SubscribeSection';

export default async function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategoryList />
      <UpcomingEventsSection />
      <HowItWorksSection />
      <CitiesSection />
      <LatestEventsSection />
      <SubscribeSection />
    </main>
  );
}
