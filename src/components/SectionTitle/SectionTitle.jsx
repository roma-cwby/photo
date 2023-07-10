import { PhotoTitle } from './SectionTitle.styled';
import bg from '../../img/sectionTitleBg.jpg';

export const SectionTitle = ({ title, position }) => {
  return (
    <PhotoTitle
      style={{
        background: `linear-gradient(#00000070, #00000070), url(${bg})`,
        backgroundPosition: `center ${position}%`,
      }}
    >
      <h2>{title}</h2>
    </PhotoTitle>
  );
};
