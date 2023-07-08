import { HeroSection } from './Hero.styled';

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
