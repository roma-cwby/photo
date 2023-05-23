import { StyledHeader } from './Header.styled';
import { MobileNav } from '../MobileNav/MobileNav';
import { useRef } from 'react';
// import { useEffect } from 'react';
import { getLanguage, setLanguage } from '../../helpers/localStorage';
import { getText } from '../../helpers/languages';

export const Header = () => {
  const mobMenuRef = useRef();

  const lang = getLanguage() || 'en';

  function changeLanguage(e) {
    if (lang === 'en') setLanguage('ua');
    else setLanguage('en');
    window.location.reload();
  }

  // useEffect(() => {
  //   setLanguage('en');
  // }, []);

  return (
    <StyledHeader>
      <div className="container header__container">
        <a className="header__logo" href="/">
          Logo
        </a>
        <nav className="header__nav">
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
          <button onClick={changeLanguage} className="header__language-btn" type="submit">
            {lang === 'en' ? 'Ua' : 'En'}
          </button>
        </nav>
        <button
          onClick={e => {
            e.target.classList.toggle('open');
            mobMenuRef.current.classList.toggle('open');
          }}
          className="header__mobile-btn"
          type="button"
        ></button>
      </div>
      <MobileNav menuRef={mobMenuRef} lan={lang} changeLan={changeLanguage} />
    </StyledHeader>
  );
};
