import styles from './AuthError.module.css';

export const AuthError = ({ message }) => {
  if (!message) return null;

  return (
    <div className={styles.errorWrapper}>
      <div className={styles.iconBox}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className={styles.messageContent}>
        <p className={styles.text}>{message}</p>
      </div>
    </div>
  );
};
