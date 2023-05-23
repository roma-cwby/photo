import { MobileNavWrap } from './MobileNav.styled';
import { getText } from '../../helpers/languages';

export const MobileNav = ({ menuRef, lan, changeLan }) => {
  return (
    <MobileNavWrap ref={menuRef}>
      <div className="container">
        <nav className="mobile-nav">
          <a href="#about" className="header__link">
            {getText('about')}
          </a>
          <a href="/" className="header__link">
            {getText('gallery')}
          </a>
          <a href="/" className="header__link">
            {getText('process')}
          </a>
          <a href="/" className="header__link">
            {getText('price')}
          </a>
          <a href="/" className="header__link">
            {getText('contacts')}
          </a>
          <button onClick={changeLan} className="header__language-btn" type="submit">
            {lan === 'en' ? 'Ua' : 'En'}
          </button>
        </nav>
      </div>
    </MobileNavWrap>
  );
};
