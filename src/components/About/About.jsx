import { AboutSection } from './About.styled';
import img from '../../img/about.jpg';
import { getText } from '../../helpers/languages';

export const About = () => {
  return (
    <AboutSection id="about">
      <div className="container about__container">
        <div className="about__description">
          <h2>
            {getText('about')} <span>{getText('aboutSpan')}</span>
          </h2>
          <p>{getText('aboutText')}</p>
        </div>
        <img className="about__img" src={img} alt="about" />
      </div>
    </AboutSection>
  );
};
