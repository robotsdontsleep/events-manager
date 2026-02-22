import FooterIntro from './FooterIntro';
import FooterAbout from './FooterAbout';
import FooterContact from './FooterContact';
import FooterDownload from './FooterDownload';
// import FooterPrivacyPolicy from './FooterPrivacyPolicy';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <FooterIntro />
      <FooterAbout />
      <FooterContact />
      <FooterDownload />
      {/* <FooterPrivacyPolicy /> */}
    </footer>
  );
}
