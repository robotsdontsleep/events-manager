import styles from './IconContent.module.css';

export default function IconContent({ icon: Icon, className = '', children }) {
  return (
    <div className={`${styles.content} ${className}`}>
      <Icon />
      {children}
    </div>
  );
}
