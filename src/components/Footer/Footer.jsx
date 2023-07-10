import { FooterSection } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterSection>
      <a href="/">Leyliant_ph</a>
      <p>{new Date().getFullYear()}</p>
    </FooterSection>
  );
};
