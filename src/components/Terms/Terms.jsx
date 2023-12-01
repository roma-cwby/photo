import { TermsSection } from './Terms.styled';
import { getText } from '../../helpers/languages';

export const Terms = () => {
  return (
    <TermsSection>
      <div className="container terms__container">
        <h2>{getText('termsTitle')}</h2>
        <div className="terms__list-wrapper">
          <ul>
            <li>{getText('termsText2')}</li>
            <li>{getText('termsText4')}</li>
            <li>{getText('termsText6')}</li>
            <li>{getText('termsText8')}</li>
            <li>{getText('termsText10')}</li>
            <li>{getText('termsText1')}</li>
            <li>{getText('termsText14')}</li>
            <li>{getText('termsText15')}</li>
          </ul>
          <ul>
            <li>{getText('termsText9')}</li>
            <li>{getText('termsText3')}</li>
            <li>{getText('termsText5')}</li>
            <li>{getText('termsText7')}</li>
            <li>{getText('termsText12')}</li>
            <li>{getText('termsText16')}</li>
            <li>{getText('termsText11')}</li>
            <li>{getText('termsText13')}</li>
            <li>{getText('termsText17')}</li>
          </ul>
        </div>
        <p>{getText('termsThanks')}</p>
      </div>
    </TermsSection>
  );
};
