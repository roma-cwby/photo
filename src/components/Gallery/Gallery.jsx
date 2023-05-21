import { GallerySection } from './Gallery.styled';
import { imgs } from '../../galleryImages';
import { useRef, useEffect } from 'react';

export const Gallery = () => {
  let index = 0;
  let paginationItems = useRef(null);

  const paginationListRef = useRef();
  const imgRef = useRef();
  const leftBtnRef = useRef();
  const rightBtnRef = useRef();

  function setBackgrounds() {
    imgRef.current.style.backgroundImage = `url(${imgs[index]})`;
    paginationItems.current[index].classList.add('current');

    if (index > 0 && index < imgs.length - 1)
      leftBtnRef.current.style.backgroundImage = `url(${imgs[index - 1]})`;
    if (index === 0) {
      leftBtnRef.current.style.backgroundImage = `url(${imgs[index]})`;
      rightBtnRef.current.style.backgroundImage = `url(${imgs[index + 1]})`;
    }
    if (index < imgs.length - 1 && index >= 0)
      rightBtnRef.current.style.backgroundImage = `url(${imgs[index + 1]})`;

    if (index === imgs.length - 1) {
      leftBtnRef.current.style.backgroundImage = `url(${imgs[index - 1]})`;
      rightBtnRef.current.style.backgroundImage = `url(${imgs[index]})`;
    }
  }

  function leftClick(e) {
    if (index === 0) return;
    index -= 1;
    paginationItems.current[index].classList.add('current');
    paginationItems.current[index + 1].classList.remove('current');
    setBackgrounds();
  }

  function rightClick(e) {
    if (index === imgs.length - 1) return;
    index += 1;
    paginationItems.current[index - 1].classList.remove('current');
    paginationItems.current[index].classList.add('current');
    setBackgrounds();
  }

  function pagiClick(e) {
    paginationItems.current[index].classList.remove('current');
    index = Number(e.target.id);
    setBackgrounds();
  }

  useEffect(() => {
    paginationItems.current = Object.values(paginationListRef.current.children);
  }, []);

  return (
    <GallerySection>
      <div className="container gallery__container">
        <div
          ref={imgRef}
          className="gallery__show"
          style={{ backgroundImage: `url(${imgs[index]})` }}
        >
          <ul className="gallery__pagination" ref={paginationListRef}>
            {imgs.map((item, idx) =>
              idx === 0 ? (
                <li onClick={pagiClick} className="current" key={item} id={idx}></li>
              ) : (
                <li onClick={pagiClick} key={item} id={idx}></li>
              )
            )}
          </ul>
          <button
            ref={leftBtnRef}
            onClick={leftClick}
            className="gallery__left-btn"
            type="button"
            style={{ backgroundImage: `url(${imgs[0]})` }}
          ></button>
          <button
            ref={rightBtnRef}
            onClick={rightClick}
            className="gallery__right-btn"
            type="button"
            style={{ backgroundImage: `url(${imgs[1]})` }}
          ></button>
        </div>
      </div>
    </GallerySection>
  );
};
