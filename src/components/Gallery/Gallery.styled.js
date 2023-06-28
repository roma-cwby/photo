import styled from 'styled-components';

export const GallerySection = styled.section`
  background-color: #ffffff;

  .gallery__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
  }

  .gallery__grid {
    height: fit-content;
    width: 50%;
    background-color: transparent;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      overflow: hidden;

      width: calc(80vh / 8);
      height: calc(80vh / 8);

      margin-bottom: 5px;

      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;

        transition: transform var(--transition);

        object-fit: cover;

        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }
  }

  .gallery__phone {
    position: relative;

    width: 45vh;
    height: 90vh;

    padding: 1.5vh;

    background-color: #101010;
    box-shadow: 10px 10px 5px #10101070;
    border-radius: 5vh;

    &::before {
      content: '';

      position: absolute;
      top: 1.5vh;
      left: 50%;

      z-index: 1;

      transform: translateX(-50%);

      width: 40%;
      height: 4%;

      background-color: #101010;
      border-bottom-left-radius: 2vh;
      border-bottom-right-radius: 2vh;
    }
  }

  .gallery__phone-info {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    position: absolute;
    top: 1.5vh;
    left: 50%;

    z-index: 1;

    padding-left: 3vh;
    padding-right: 3vh;

    transform: translateX(-50%);

    width: calc(100% - 3vh);
    height: 4%;

    background-color: transparent;

    p {
      font-size: 1.5vh;
      font-weight: 600;
      color: #000000;
    }

    .gallery__phone-info-icons {
      display: flex;
      height: 100%;
      align-items: flex-end;

      & svg {
        width: 2vh;
        height: 2vh;

        fill: #000000;

        &:not(:last-of-type) {
          margin-right: 1vh;
        }
      }
    }
  }

  .gallery__phone-screen {
    padding-top: 4vh;

    width: 100%;
    height: 100%;

    overflow-x: hidden;
    overflow-y: scroll;

    background-color: #ffffff;
    border-radius: 4vh;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .gallery__post {
    background-color: transparent;
    border-bottom: 1px solid silver;

    .gallery__post-head {
      display: flex;
      align-items: center;

      padding: 1vh;

      div {
        width: 4vh;
        height: 4vh;

        margin-right: 1vh;

        border-radius: 50%;
      }

      p {
        font-size: 2vh;
      }

      p:last-of-type {
        transform: rotateZ(90deg);
        font-size: 3vh;

        margin-left: auto;
        margin-right: 0;
      }
    }

    &.like .gallery__post-photos svg {
      animation: heartAnim 0.7s;
    }

    .gallery__post-photos {
      position: relative;

      width: 100%;

      img {
        object-fit: cover;
      }

      svg {
        position: absolute;

        width: 15vh;
        height: 15vh;

        top: 50%;
        left: 50%;

        opacity: 0;

        transform: translate(-50%, -50%);
        fill: #ffffff80;
      }

      @keyframes heartAnim {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }

    &.like .gallery__post-icons svg {
      fill: red;
    }

    .gallery__post-icons {
      position: relative;
      padding: 1vh;

      display: flex;
      align-items: center;

      svg {
        width: 4vh;
        height: 4vh;

        margin-right: 1vh;
        transition: fill var(--transition);

        &:hover {
          cursor: pointer;
        }
      }

      img {
        width: 3vh;
        height: 3vh;

        margin-right: 1vh;

        &:last-of-type {
          width: 4vh;
          height: 4vh;

          margin-right: 0;
          margin-left: auto;
        }
      }

      .gallery__post-pagination {
        position: absolute;

        display: flex;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        div {
          height: 1vh;
          width: 1vh;

          border-radius: 50%;

          background-color: silver;

          &:not(:last-of-type) {
            margin-right: 0.5vh;
          }
        }

        div.current {
          background-color: blue;
        }
      }
    }

    .gallery__post-likes {
      padding-left: 1vh;
      padding: 1vh 1vh 2vh 1vh;

      font-size: 1.7vh;
      font-weight: 400;
    }
  }
`;
