import { ProcessSection } from './Process.styled';
import bgImg from '../../img/23.jpg';
import { getText } from '../../helpers/languages';

export const Process = () => {
  return (
    <ProcessSection
      style={{ backgroundImage: `linear-gradient( #ffffff 10%, transparent 100%) , url(${bgImg})` }}
    >
      <div className="container section__container">
        <h2>{getText('processTitle')}</h2>
        <ul>
          <li>
            <span>1</span>
            <p>{getText('processCard1')}</p>
          </li>
          <li>
            <span>2</span>
            <p>{getText('processCard2')}</p>
          </li>
          <li>
            <span>3</span>
            <p>{getText('processCard3')}</p>
          </li>
          <li>
            <span>4</span>
            <p>{getText('processCard4')}</p>
          </li>
        </ul>
      </div>
    </ProcessSection>
  );
};
