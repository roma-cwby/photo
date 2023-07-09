import { FooterSection } from './Footer.styled';
import logo from '../../img/logo.png';

export const Footer = () => {
  return (
    <FooterSection>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <p>{new Date().getFullYear()}</p>
    </FooterSection>
  );
};
