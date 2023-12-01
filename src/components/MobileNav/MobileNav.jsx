import { MobileNavWrap } from './MobileNav.styled';
import { getText } from '../../helpers/languages';
import ukFlag from '../../img/uk.jpg';
import uaFlag from '../../img/ua.jpg';

export const MobileNav = ({ menuRef, lan, changeLan, close, MobileMenuClick }) => {
  return (
    <MobileNavWrap ref={menuRef}>
      <div className="container">
        <nav className="mobile-nav" onClick={MobileMenuClick}>
          <a onClick={close} id="about" className="header__link">
            {getText('about')}
          </a>
          <a onClick={close} id="process" className="header__link">
            {getText('process')}
          </a>
          <a onClick={close} id="gallery" className="header__link">
            {getText('gallery')}
          </a>
          <a onClick={close} id="pricing" className="header__link">
            {getText('price')}
          </a>
          <a onClick={close} id="terms" className="header__link">
            {getText('terms')}
          </a>
          <a onClick={close} id="contacts" className="header__link">
            {getText('contacts')}
          </a>
          <button
            onClick={changeLan}
            className="header__language-btn"
            type="submit"
            style={{ backgroundImage: `url(${lan === 'en' ? uaFlag : ukFlag})` }}
          ></button>
        </nav>
      </div>
    </MobileNavWrap>
  );
};
