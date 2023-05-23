import { HeroSection } from './Hero.styled';
import { Social } from '../Social/Social';
import bg from '../../img/hero-bg.jpg';

export const Hero = () => {
  return (
    <HeroSection style={{ backgroundImage: `url(${bg})` }}>
      <div className="container hero__container">
        <h1 className="hero__title">Your personal photographer in London</h1>
        <Social Class="hero__social" />
      </div>
    </HeroSection>
  );
};
