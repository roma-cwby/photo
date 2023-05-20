import { StyledHeader } from './Header.styled';
import { MobileNav } from '../MobileNav/MobileNav';
import { useRef } from 'react';

export const Header = () => {
  const mobMenuRef = useRef();

  return (
    <StyledHeader>
      <div className="container header__container">
        <a href="/">Logo</a>
        <nav className="header__nav">
          <a href="/" className="header__link">
            Gallery
          </a>
          <a href="/" className="header__link">
            Process
          </a>
          <a href="/" className="header__link">
            Price
          </a>
          <a href="/" className="header__link">
            Contacts
          </a>
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
      <MobileNav menuRef={mobMenuRef} />
    </StyledHeader>
  );
};
