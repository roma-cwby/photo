import { MobileNavWrap } from './MobileNav.styled';

export const MobileNav = ({ menuRef }) => {
  return (
    <MobileNavWrap ref={menuRef}>
      <div className="container">
        <nav className="mobile-nav">
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
      </div>
    </MobileNavWrap>
  );
};
