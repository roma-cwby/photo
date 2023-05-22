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

    /* overflow: hidden; */

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

  .gallery__left-btn {
    position: absolute;
    left: 10px;
    bottom: 30px;

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
    bottom: 30px;

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

  .gallery__pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    width: 70%;
    min-height: 10px;

    background-color: transparent;
    margin-bottom: 10px;

    & li {
      height: 10px;
      width: 10px;

      border-radius: 50%;
      background-color: white;

      transition: background-color 300ms linear;

      &.current {
        background-color: red;
      }

      &:not(:last-of-type) {
        margin-right: 1px;
      }

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: red;
      }
    }
  }

  //New
  /* .gallery__pagination-list {
    display: flex;

    height: 80vh;
    width: 100%;

    //165
    //314
    //463
    transition: transform 300ms linear;
  }

  .gallery__pagination-item {
    position: relative;
    z-index: 2;
    height: 80vh;
    min-width: calc(80vh / 1.5);

    border-radius: 20px;

    overflow: hidden;

    transition: all 300ms linear;

    &:hover,
    &:focus {
      cursor: pointer;
    }

    /* &.show {
      box-shadow: 6px 7px 56px 1px rgba(0, 0, 0, 0.56);
    } */

  /* &.left {
      z-index: 1;
      transform: scale(0.9) translateX(100px);
    }

    &.right {
      z-index: 1;
      transform: scale(0.9) translateX(-100px);
    }

    img {
      height: 100%;
      min-width: 100%;

      object-fit: cover;
    } */
`;
