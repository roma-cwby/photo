import { PrinciplesSection } from './Principle.styled';
import { getText } from '../../helpers/languages';
import img1 from '../../img/5.jpg';
import img2 from '../../img/12.jpg';
import img3 from '../../img/22.jpg';
import { useEffect, useRef } from 'react';

export const Principles = () => {
  const textRef = useRef();

  function scroll(e) {
    if (
      e.target.scrollingElement.scrollTop >=
      textRef.current.offsetTop - textRef.current.offsetHeight
    ) {
      textRef.current.classList.add('show');
    }
    if (
      e.target.scrollingElement.scrollTop -
        (textRef.current.offsetTop - textRef.current.offsetHeight) >
        100 ||
      e.target.scrollingElement.scrollTop -
        (textRef.current.offsetTop - textRef.current.offsetHeight) <
        -200
    )
      textRef.current.classList.remove('show');
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <PrinciplesSection>
      <div onScroll={scroll} className="container principles__container">
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
          <li ref={textRef} className="item__text" style={{ backgroundImage: `url(${img3})` }}>
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
