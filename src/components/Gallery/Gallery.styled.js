import styled from 'styled-components';

export const GallerySection = styled.section`
  background-color: silver;

  .gallery__container {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      width: 100%;

      li {
        overflow: hidden;
        width: calc(100% / 2 - 5px);
        margin-bottom: 10px;

        @media (min-width: 768px) {
          width: calc(100% / 5 - 8px);
        }

        img {
          width: 100%;
          height: 100%;

          object-fit: cover;
          transition: transform var(--transition);

          &:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .backdrop {
    display: none;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.8);

    img {
      width: 95vw;
      @media (min-width: 768px) {
        height: 95vh;
        width: auto;
      }
    }

    &.show {
      display: flex;
    }
  }
`;
