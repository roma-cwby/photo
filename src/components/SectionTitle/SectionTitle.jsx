import { PhotoTitle } from './SectionTitle.styled';
import bg from '../../img/gallery/2.jpg';

export const SectionTitle = ({ title, position }) => {
  return (
    <PhotoTitle
      style={{
        background: `linear-gradient(#00000070, #00000070), url(${bg})`,
        backgroundPositionY: `${position}%`,
      }}
    >
      <h2>{title}</h2>
    </PhotoTitle>
  );
};
