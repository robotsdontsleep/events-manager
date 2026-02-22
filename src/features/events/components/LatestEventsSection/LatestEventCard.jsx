'use client';

import MetaInfo from 'components/Separator/Separator';

import { BiCategory, GoClock } from 'assets/icons';
import formatDate from 'lib/formatDate';

import styles from './LatestEventCard.module.css';
import IconContent from 'components/IconContent/IconContent';

export default function NewsItemCard(props) {
  const dateFormat = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles['card-body']}>
        <div className={styles.meta}>
          <IconContent icon={BiCategory}>
            <p className={styles['meta-text']}>{props.category}</p>
          </IconContent>
          <span className={styles.separator}>|</span>
          <IconContent icon={GoClock}>
            <p className={styles['meta-text']}>{formatDate(props.dates?.[0], dateFormat)}</p>
          </IconContent>
        </div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
