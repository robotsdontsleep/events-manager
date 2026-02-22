import styles from './Category.module.css';

export const Category = ({ name, image: url, eventsCount = 0 }) => (
  <div className={styles.link}>
    <img src={url} alt={name} className={styles.icon} />
    <h2 className={styles.title}>{name}</h2>
    <p className={styles.count}>{eventsCount} Events</p>
  </div>
);
