'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import formatDate from 'lib/formatDate';
import styles from './Carousel.module.css';

const dateFormat = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export default function Carousel({ items = [], intervalMs = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
    }, intervalMs);

    return () => clearInterval(interval);
  }, [items, intervalMs]);

  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  return (
    <div className={styles.carouselWrapper}>
      <Link href={`/events/${currentItem.id}`} key={currentItem.id} className={styles.slide}>
        <h3>{currentItem.name}</h3>
        <p>{formatDate(currentItem.dates[0], dateFormat)}</p>
      </Link>
    </div>
  );
}
