import { ContactsSection } from './Contacts.style';
import { Social } from '../Social/Social';
import { getText } from '../../helpers/languages';
import bg from '../../img/26.jpg';

export const Contacts = () => {
  return (
    <ContactsSection id="contacts">
      <img src={bg} alt="contacts bg" />
      <div className="container contacts__container">
        <h2>{getText('contactsTitle')}</h2>
        <Social Class="contacts__social" />
      </div>
    </ContactsSection>
  );
};
