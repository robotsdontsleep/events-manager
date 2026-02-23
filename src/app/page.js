import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { auth } from 'lib/auth';

import HeroSection from 'components/sections/HeroSection/HeroSection';
import HowItWorksSection from 'components/sections/HowItWorksSection/HowItWorksSection';
import LatestEventsSection from 'features/events/components/LatestEventsSection/LatestEventsSection';
import CategoryList from 'features/categories/components/CategoryList';
import CitiesSection from 'features/cities/components/CitiesSection';
import UpcomingEventsSection from 'features/events/components/UpcomingEventsSection';
import SubscribeSection from 'components/sections/SubscribeSection/SubscribeSection';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import WelcomeHandler from 'components/WelcomeHandler/WelcomeHandler';

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log('Session on server:', !!session);

  if (!session) {
    redirect('/signIn');
    return null;
  }

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <WelcomeHandler userName={session.user.name} />
        </Suspense>

        <HeroSection />
        <CategoryList />
        <UpcomingEventsSection />
        <HowItWorksSection />
        <CitiesSection />
        <LatestEventsSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}
