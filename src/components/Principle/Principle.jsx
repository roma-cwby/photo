import { PrinciplesSection } from './Principle.styled';
import { getText } from '../../helpers/languages';
import img1 from '../../img/5.jpg';
import img2 from '../../img/12.jpg';
import img3 from '../../img/22.jpg';

export const Principles = () => {
  return (
    <PrinciplesSection>
      <div className="container principles__container">
        <ul className="principles__list">
          <li className="item__title">
            <h2>{getText('principlesTitle')}</h2>
          </li>
          <li className="item__photo">
            <img src={img1} alt="pirinciples" />
          </li>
          <li className="item__photo">
            <img src={img2} alt="pirinciples" />
          </li>
          <li className="item__text" style={{ backgroundImage: `url(${img3})` }}>
            <p>{getText('principlesCard1')}</p>

            <p>{getText('principlesCard2')}</p>

            <p>{getText('principlesCard3')}</p>

            <p>{getText('principlesCard4')}</p>

            <p>{getText('principlesCard5')}</p>
          </li>
        </ul>
      </div>
    </PrinciplesSection>
  );
};
