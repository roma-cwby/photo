import { PrinciplesSection } from './Principle.styled';
import { getText } from '../../helpers/languages';
import bg from '../../img/gallery/43.jpg';

export const Principles = () => {
  return (
    <PrinciplesSection
      style={{
        backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.8) ,  rgba(255, 255, 255, 0.5)) , url(${bg})`,
      }}
    >
      <div className="container principles__container">
        <div className="principles__text">
          <h3>{getText('principlesTitle')}</h3>
          <h4>{getText('principlesTitle2')}</h4>
          <ul>
            <li>{getText('principlesCard1')}</li>
            <li>{getText('principlesCard2')}</li>
            <li>{getText('principlesCard3')}</li>
            <li>{getText('principlesCard4')}</li>
            <li>{getText('principlesCard5')}</li>
          </ul>
        </div>
      </div>
    </PrinciplesSection>
  );
};
