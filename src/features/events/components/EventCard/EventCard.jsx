'use client';

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import IconContent from 'components/IconContent/IconContent';

import { CiLocationOn, FaHeart, GoClock } from 'assets/icons';
import formatDate from 'lib/formatDate';

import { like, dislike } from 'store/like/slice';
import { selectIsLiked } from 'store/like/selectors';

import styles from './EventCard.module.css';

const dateFormat = {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export const EventCard = (props) => {
  const dispatch = useDispatch();

  const isLiked = useSelector((state) => selectIsLiked(state, props.id));

  function handleToggleEventLike() {
    isLiked ? dispatch(dislike(props.id)) : dispatch(like(props));
  }

  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <img src={props.image} alt={props.name} />
        <span className={styles.category}>{props.category}</span>
        <button className={styles.likeBtn} onClick={handleToggleEventLike}>
          <FaHeart size={20} className={isLiked ? styles.active : ''} />
        </button>
      </div>
      <div className={styles['card-body']}>
        <h2>{props.name}</h2>
        <div className={styles.meta}>
          <IconContent icon={GoClock}>
            <p className={styles['meta-text']}>{formatDate(props.dates[0], dateFormat)}</p>
          </IconContent>
          <IconContent icon={CiLocationOn}>
            <p className={styles['meta-text']}>
              {props.location?.city}, {props.location?.state}
            </p>
          </IconContent>
        </div>

        <div className={styles['card-footer']}>
          <button>Get Ticket</button>
          <p className={styles.price}>${props.price.amount}</p>
        </div>
      </div>
    </div>
  );
};
