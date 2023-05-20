import styled from 'styled-components';

export const GallerySection = styled.section`
  background-color: seagreen;

  .gallery__container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .gallery__show {
    position: relative;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    /* height: 80vh; */
    aspect-ratio: 1 / 1.5;

    width: calc(80vh / 1.5);

    background-color: transparent;
    background-position: center;
    background-size: cover;
    border-radius: 10px;

    @media (min-width: 768px) {
      width: calc(80vh / 1.5);
    }

    @media (min-width: 1200px) {
      width: calc(80vh / 1.5);
    }
  }

  .gallery__pagination {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 70%;
    height: 10px;

    background-color: transparent;
    margin-bottom: 10px;

    & li {
      height: 5px;
      width: 5px;

      border-radius: 50%;
      background-color: white;

      transition: background-color 300ms linear;

      &.current {
        background-color: red;
      }
    }
  }

  .gallery__left-btn {
    position: absolute;
    left: 10px;
    bottom: 15px;

    height: 100px;
    width: 70px;

    border-radius: 10px;
    background-color: transparent;
    background-position: center;
    background-size: cover;

    transform-origin: bottom center;

    @media (min-width: 768px) {
      left: -10px;

      height: 150px;
      width: 100px;

      transform: rotate(-15deg);
    }

    @media (min-width: 1200px) {
      left: -30px;
    }
  }

  .gallery__right-btn {
    position: absolute;
    right: 10px;
    bottom: 15px;

    height: 100px;
    width: 70px;

    border-radius: 10px;
    background-color: transparent;
    background-position: center;
    background-size: cover;

    transform-origin: bottom center;

    @media (min-width: 768px) {
      right: -10px;

      height: 150px;
      width: 100px;

      transform: rotate(15deg);
    }

    @media (min-width: 1200px) {
      right: -30px;
    }
  }
`;
