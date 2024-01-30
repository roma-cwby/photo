import { PricingSection } from './Pricing.styled';
import { getText } from '../../helpers/languages';
import { BiTime } from 'react-icons/bi';
import { MdPhotoCamera } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BsFillClipboardCheckFill } from 'react-icons/bs';

export const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <div className="container pricing__container">
        <h2>{getText('pricingTitle')}</h2>
        <ul>
          <li>
            <h3 style={{ borderBottom: `1px solid yellow` }}>{getText('package1Title')}</h3>
            <h4>60£</h4>
            <p>
              <BiTime />
              {getText('package11')}
            </p>
            <p>
              <MdPhotoCamera />
              {getText('package12')}
            </p>
            <p>
              <MdLocationOn />
              {getText('package13')}
            </p>
          </li>
          <li>
            <h3 style={{ borderBottom: `1px solid blue` }}>{getText('package2Title')}</h3>
            <h4>100£</h4>
            <p>
              <BiTime />
              {getText('package21')}
            </p>
            <p>
              <MdPhotoCamera />
              {getText('package22')}
            </p>
            <p>
              <MdLocationOn />
              {getText('package23')}
            </p>
          </li>
          <li>
            <h3 style={{ borderBottom: `1px solid white` }}>{getText('package3Title')}</h3>
            <h4>200£</h4>
            <p>
              <BiTime />
              {getText('package31')}
            </p>
            <p>
              <MdPhotoCamera />
              {getText('package32')}
            </p>
            <p>
              <MdLocationOn />
              {getText('package33')}
            </p>
            <p>
              <BsFillClipboardCheckFill />
              {getText('package34')}
            </p>
          </li>
        </ul>
        <p className="pricing-plus">{getText('packagePlus')}</p>
      </div>
    </PricingSection>
  );
};
