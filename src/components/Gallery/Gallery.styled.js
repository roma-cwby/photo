import styled from 'styled-components';

export const GallerySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #101010;

  .gallery__list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    overflow: hidden;
    width: 100%;
    li {
      width: calc(100% / 4 - 10px);
      margin-bottom: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;

        transition: transform var(--transition);

        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }

    /* li:nth-child(odd) {
      transform: translateY(50%);
    } */
  }
`;
