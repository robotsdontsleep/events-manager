import NavBar from 'components/NavBar/NavBar';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
}
