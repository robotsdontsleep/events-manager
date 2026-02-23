'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import logo from 'assets/images/logo.png';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';

import { authClient } from 'lib/auth-client';

import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/signIn');
          router.refresh();
        },
      },
    });
  };

  return (
    <nav className={styles.nav}>
      <Image src={logo} alt="Eventa logo" priority className={styles.logo} />

      <div className={styles.links}>
        <Link href="/">HOME</Link>
        <Link href="/">BLOG</Link>
        <Link href="/">ABOUT US</Link>
        <Link href="/">CONTACT</Link>
      </div>

      <div className={styles.actions}>
        <Link href="/">
          <CiHeart size={35} />
        </Link>
        <Link href="/">
          <CiShoppingCart size={35} />
        </Link>

        <button onClick={handleSignOut} className={styles.signOutBtn}>
          LOG OUT
        </button>
      </div>
    </nav>
  );
}
