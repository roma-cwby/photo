import { StyledHeader } from './Header.styled';
import { MobileNav } from '../MobileNav/MobileNav';
import { useRef } from 'react';
import { getLanguage, setLanguage } from '../../helpers/localStorage';
import { getText } from '../../helpers/languages';
import ukFlag from '../../img/uk.jpg';
import uaFlag from '../../img/ua.jpg';

export const Header = () => {
  const mobMenuRef = useRef();
  const sectionRef = useRef();
  const btnRef = useRef();

  const lang = getLanguage() || 'en';

  function changeLanguage(e) {
    if (lang === 'en') setLanguage('ua');
    else setLanguage('en');
    window.location.reload();
  }

  function toggleOpen() {
    btnRef.current.classList.toggle('open');
    mobMenuRef.current.classList.toggle('open');
    sectionRef.current.classList.toggle('open');
  }

  return (
    <StyledHeader ref={sectionRef}>
      <div className="container header__container">
        <a className="header__logo" href="/">
          Logo
        </a>
        <nav className="header__nav">
          <a href="#about" className="header__link">
            {getText('about')}
          </a>
          <a href="#gallery" className="header__link">
            {getText('gallery')}
          </a>
          <a href="#process" className="header__link">
            {getText('process')}
          </a>
          <a href="#pricing" className="header__link">
            {getText('price')}
          </a>
          <a href="/" className="header__link">
            {getText('contacts')}
          </a>
          <button
            onClick={changeLanguage}
            className="header__language-btn"
            type="submit"
            style={{ backgroundImage: `url(${lang === 'en' ? uaFlag : ukFlag})` }}
          ></button>
        </nav>
        <button
          ref={btnRef}
          onClick={toggleOpen}
          className="header__mobile-btn"
          type="button"
        ></button>
      </div>
      <MobileNav menuRef={mobMenuRef} lan={lang} changeLan={changeLanguage} close={toggleOpen} />
    </StyledHeader>
  );
};
