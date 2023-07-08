import { GallerySection } from './Gallery.styled';
import { imgs } from '../../galleryImages';
import { useRef } from 'react';

export const Gallery = () => {
  const backdropRef = useRef();

  function showImage(e) {
    backdropRef.current.children[0].attributes.src.value = imgs[Number(e.target.closest('li').id)];
    backdropRef.current.classList.add('show');
    document.body.style.overflowY = 'hidden';
  }

  function closeBackdrop(e) {
    backdropRef.current.classList.remove('show');
    document.body.style.overflowY = 'overlay';
  }

  return (
    <GallerySection id="gallery">
      <div className="container gallery__container">
        <ul>
          {imgs.map((item, idx) => (
            <li id={idx} key={item}>
              <img onClick={showImage} src={item} alt={item} />
            </li>
          ))}
        </ul>
      </div>
      <div onClick={closeBackdrop} className="backdrop" ref={backdropRef}>
        <img src="" alt="" />
      </div>
    </GallerySection>
  );
};
