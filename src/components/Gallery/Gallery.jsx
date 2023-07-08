import { GallerySection } from './Gallery.styled';
import { getText } from '../../helpers/languages';
import debounce from 'lodash.debounce';
import { useRef } from 'react';

import { CiBatteryFull } from 'react-icons/ci';
import { BiWifi2 } from 'react-icons/bi';
import { BiSignal4 } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';

import { imgs } from '../../galleryImages';
import { instaImages } from '../../galleryImages';
import comment from '../../img/instaComment.png';
import share from '../../img/instaShare.png';
import flag from '../../img/instaFlag.png';

function instaTime() {
  const date = new Date();
  return `${date.getHours()} : ${
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  }`;
}

export const Gallery = () => {
  const screenRef = useRef();

  function imgClick(e) {
    const y = (screenRef.current.scrollHeight / imgs.length) * Number(e.target.closest('li').id);

    screenRef.current.scroll({
      top: y,
      behavior: 'smooth',
    });
  }

  function like(e) {
    if (e.target.closest('li').classList.contains('like'))
      e.target.closest('li').children[3].children[0].textContent =
        Number(e.target.closest('li').children[3].children[0].textContent) - 1;
    else
      e.target.closest('li').children[3].children[0].textContent =
        Number(e.target.closest('li').children[3].children[0].textContent) + 1;

    e.target.closest('li').classList.toggle('like');
  }

  const mobileGalleryScroll = debounce(e => {
    console.log(e);
  }, 500);

  if (window.screen.width >= 768)
    return (
      <GallerySection id="gallery">
        <div className="container gallery__container">
          <ul className="gallery__grid">
            {imgs.map((item, idx) => (
              <li key={item} id={idx}>
                <img loading="lazy" onClick={imgClick} src={item} alt={item} />
              </li>
            ))}
          </ul>
          <div className="gallery__phone">
            <div className="gallery__phone-info">
              <p>{instaTime()}</p>
              <div className="gallery__phone-info-icons">
                <BiSignal4 />
                <BiWifi2 />
                <CiBatteryFull />
              </div>
            </div>
            <ul ref={screenRef} className="gallery__phone-screen">
              {imgs.map(item => (
                <li key={item} className="gallery__post">
                  <div className="gallery__post-head">
                    <div style={{ backgroundColor: '#000000' }}></div>
                    <p>
                      {instaImages.map(imgs => {
                        if (imgs.data.includes(item)) return imgs.name;
                      })}
                    </p>
                    <p>...</p>
                  </div>
                  <div className="gallery__post-photos">
                    <img onDoubleClick={like} loading="lazy" src={item} alt="photo" />
                    <AiFillHeart />
                  </div>
                  <div className="gallery__post-icons">
                    <AiFillHeart onClick={like} />
                    <img loading="lazy" src={comment} alt="comment" />
                    <img loading="lazy" src={share} alt="share" />
                    <img loading="lazy" src={flag} alt="flag" />
                  </div>
                  <p className="gallery__post-likes">
                    <span>{Math.floor(Math.random() * 1000)}</span> {getText('likes')}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GallerySection>
    );
  else
    return (
      <GallerySection>
        <div className="container gallery__container">
          <ul onScrollCapture={mobileGalleryScroll} className="mobile-gallery__list">
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
