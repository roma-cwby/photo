import { PrinciplesSection } from './Principle.styled';
import { getText } from '../../helpers/languages';
import img from '../../img/5.jpg';

export const Principles = () => {
  return (
    <PrinciplesSection>
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
        <img src={img} alt="principles" />
      </div>
    </PrinciplesSection>
  );
};
