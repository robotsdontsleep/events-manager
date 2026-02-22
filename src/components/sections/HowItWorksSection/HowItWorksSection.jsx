'use client';

import Slider from 'components/SwiperSlider/Slider';

import { Section } from '../Section';
import { HowItWorksCard } from './HowItWorksCard';

const stepsList = [
  {
    step: 1,
    image: 'https://img.icons8.com/?id=69120&format=png&color=E1766c',
    title: 'Choose What To Do',
    description: 'Easily find your event via search system with multiple params.',
  },
  {
    step: 2,
    image: 'https://img.icons8.com/?id=102202&format=png&color=E1766c',
    title: 'Booking event that you like',
    description: 'Choose Ticket add to cart. Support payment via Woocommerce system.',
  },
  {
    step: 3,
    image: 'https://img.icons8.com/?id=5510&format=png&color=E1766c',
    title: 'Get the ticket to attend',
    description:
      'After booking successfully, You will get ticket in email or download in your account',
  },
];

export default function HowItWorksSection() {
  const content = <Slider items={stepsList} slideItem={HowItWorksCard} />;

  return (
    <Section
      title="How It works"
      description="See how our platform helps you discover, book, and enjoy events effortlessly — step by step"
      content={content}
    />
  );
}
