import { getText } from '../../helpers/languages';
import { HeroSection } from './Hero.styled';
import bg from '../../img/hero-bg.jpg';
import { BsInstagram } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { SiMaildotru } from 'react-icons/si';

export const Hero = () => {
  return (
    <HeroSection style={{ backgroundImage: `url(${bg})` }}>
      <div className="container hero__container">
        <div className="hero__wrap">
          <h1 className="hero__title">{getText('heroTitle')}</h1>
          <p className="hero__text">{getText('heroText')}</p>
          <div className="hero__social">
            <a
              className="social"
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/leyliant_ph?igshid=OGQ5ZDc2ODk2ZA=="
            >
              <BsInstagram />
            </a>
            <a className="social" target="_blank" rel="noreferrer" href="https://t.me/leyli_ant">
              <BsTelegram />
            </a>
            <a
              className="social"
              target="_blank"
              rel="noreferrer"
              href="mailto:lilia.antoliak.18@gmail.com"
            >
              <SiMaildotru />
            </a>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};
