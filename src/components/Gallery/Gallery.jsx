import { GallerySection } from './Gallery.styled';
import { imgs } from '../../galleryImages';

export const Gallery = () => {
  return (
    <GallerySection id="gallery">
      <div className="container gallery__container">
        <ul className="gallery__list">
          {imgs.map(item => (
            <li key={item}>
              <img src={item} alt={item} />
            </li>
          ))}
        </ul>
      </div>
    </GallerySection>
  );
};
