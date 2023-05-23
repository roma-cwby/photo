import { PrinciplesSection } from './Principle.styled';
import bgImg from '../../img/section-bg.jpg';
import { getText } from '../../helpers/languages';

export const Principles = () => {
  return (
    <PrinciplesSection style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container principles__container">
        <h2>{getText('principlesTitle')}</h2>
        <ul className="principles__list">
          <li>{getText('principlesCard1')}</li>
          <li>{getText('principlesCard2')}</li>
          <li>{getText('principlesCard3')}</li>
          <li>{getText('principlesCard4')}</li>
          <li>{getText('principlesCard5')}</li>
        </ul>
      </div>
    </PrinciplesSection>
  );
};
