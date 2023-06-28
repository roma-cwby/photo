import { MobileNavWrap } from './MobileNav.styled';
import { getText } from '../../helpers/languages';
import ukFlag from '../../img/uk.jpg';
import uaFlag from '../../img/ua.jpg';

export const MobileNav = ({ menuRef, lan, changeLan, close }) => {
  return (
    <MobileNavWrap ref={menuRef}>
      <div className="container">
        <nav className="mobile-nav">
          <a onClick={close} href="#about" className="header__link">
            {getText('about')}
          </a>
          <a onClick={close} href="#process" className="header__link">
            {getText('process')}
          </a>
          <a onClick={close} href="#gallery" className="header__link">
            {getText('gallery')}
          </a>
          <a onClick={close} href="#pricing" className="header__link">
            {getText('price')}
          </a>
          <a onClick={close} href="/" className="header__link">
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
