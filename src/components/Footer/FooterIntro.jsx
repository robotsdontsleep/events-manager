import Image from 'next/image';
import Link from 'next/link';

import logo from 'assets/images/logo.png';

import { FaFacebookF, FaInstagram, FaPinterest, FaXTwitter } from 'assets/icons';

export const socialMedia = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    link: 'https://www.facebook.com',
  },
  {
    name: 'Pinterest',
    icon: FaPinterest,
    link: 'https://www.pinterest.com',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com',
  },
  {
    name: 'X',
    icon: FaXTwitter,
    link: 'https://x.com',
  },
];

export default function FooterIntro() {
  return (
    <section className="intro">
      <Link href="/">
        <Image src={logo} alt="Eventa logo" priority className='logo-image'/>
      </Link>

      <p className="description">Plan, manage, and discover events — all in one place.</p>

      <ul className="social-list">
        {socialMedia.map(({ name, icon: Icon, link }) => (
          <li key={name}>
            <a href={link} className="socialLink">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
