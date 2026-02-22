import IconContent from 'components/IconContent/IconContent';
import { CiLocationOn, IoPhonePortraitOutline, MdOutlineMailOutline } from 'assets/icons';

export default function FooterContact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <IconContent icon={CiLocationOn}>
        <p>San Francisco City Hall, San Francisco, CA</p>
      </IconContent>
      <IconContent icon={MdOutlineMailOutline}>
        <a href="mailto:contact@domain.com">contact@domain.com</a>
      </IconContent>
      <IconContent icon={IoPhonePortraitOutline}>
        <a href="tel:+01101234567">(+011) 01234567</a>
      </IconContent>
    </section>
  );
}
//зауваж що контакти ідуть разом з іконками
