import { ContactsSection } from './Contacts.style';
import { Social } from '../Social/Social';
import { getText } from '../../helpers/languages';
import bg from '../../img/26.jpg';

export const Contacts = () => {
  return (
    <ContactsSection
      id="contacts"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg}) center 0 / cover no-repeat`,
      }}
    >
      <div className="container contacts__container">
        <h2>{getText('contactsTitle')}</h2>
        <Social Class="contacts__social" />
      </div>
    </ContactsSection>
  );
};
