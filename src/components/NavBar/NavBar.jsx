import Link from 'next/link';
import { CiHeart, CiShoppingCart } from 'assets/icons';

import styles from './NavBar.module.css';
import Image from 'next/image';
import logo from 'assets/images/logo.png';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Image src={logo} alt="Eventa logo" priority className={styles.logo} />
      <div>
        <Link href="/">HOME</Link>
        <Link href="/">BLOG</Link>
        <Link href="/">ABOUT US</Link>
        <Link href="/">CONTACT</Link>
      </div>
      <div>
        <Link href="/">
          <CiHeart size={35} />
        </Link>
        <Link href="/">
          <CiShoppingCart size={35} />
        </Link>
        <Link href="/">LOGIN</Link>

        <Link href="/">REGISTER</Link>
      </div>
    </nav>
  );
}
