import { AboutSection } from './About.styled';
import img from '../../img/27.jpg';
import { getText } from '../../helpers/languages';
import { Social } from '../Social/Social';

export const About = () => {
  return (
    <AboutSection id="about">
      <div className="container about__container">
        <img src={img} alt="me" />
        <div className="about__text">
          <h2>
            {getText('about')}
            {getText('aboutSpan')}
          </h2>
          <p>{getText('aboutText')}</p>
          <Social Class="about__social" />
        </div>
      </div>
    </AboutSection>
  );
};
