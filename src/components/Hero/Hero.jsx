import { HeroSection } from './Hero.styled';
import bg from '../../img/24.jpg';

export const Hero = () => {
  return (
    <HeroSection>
      <div className="container hero__container">
        <h1 className="hero__title">
          Liliia Antoliak <br /> <span>Your personal photographer in London</span>
        </h1>
      </div>
    </HeroSection>
  );
};
