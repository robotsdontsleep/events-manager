'use client';

import styles from './CitiesSection.module.css';

export const CityCard = ({ eventsCount = 0, name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <img src={image} alt="" />
      </div>
      <div className={styles['card-body']}>
        <h2>{name}</h2>
        <p>{eventsCount} Events</p>
      </div>
    </div>
  );
};
