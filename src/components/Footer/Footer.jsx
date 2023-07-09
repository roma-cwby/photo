import { FooterSection } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterSection>
      <a href="/">Logo</a>
      <p>{new Date().getFullYear()}</p>
    </FooterSection>
  );
};
