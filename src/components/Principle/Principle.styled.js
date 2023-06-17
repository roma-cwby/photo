import styled from 'styled-components';

export const PrinciplesSection = styled.section`
  height: auto;

  @media (min-width: 1200px) {
    height: 100vh;
  }

  background-color: white;

  .principles__container {
    height: 100%;
    background-color: transparent;

    .principles__list {
      height: 100%;
      width: 100%;

      display: block;

      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
      }

      li {
        width: 100%;
        height: 400px;

        @media (min-width: 768px) {
          width: 50%;
          height: 300px;
        }

        @media (min-width: 1200px) {
          width: 50%;
          height: 50%;
        }
      }

      .item__title {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 20px;

        h2 {
          font-size: 25px;
          font-weight: 300;

          @media (min-width: 768px) {
            font-size: 30px;
          }

          @media (min-width: 1200px) {
            font-size: 40px;
          }
        }
      }

      .item__photo {
        img {
          height: 100%;

          object-fit: cover;
        }
      }

      .item__photo:nth-child(2) {
        display: none;
        @media (min-width: 768px) {
          display: block;
        }
      }

      .item__text {
        display: flex;
        flex-wrap: wrap;

        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;

        &.show p {
          color: #000000;
          background-color: #ffffff;
        }

        p {
          width: 50%;
          height: calc(100% / 5 * 2);

          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 10px;
          font-size: 15px;

          animation: show 15s linear infinite;

          color: transparent;

          transition: background-color var(--transition), color var(--transition);

          background-color: transparent;

          @media (max-width: 400px) {
            width: 100%;
            height: calc(100% / 5);
          }

          @media (min-width: 1200px) {
            font-size: 20px;
          }
        }

        p:last-of-type {
          width: 100%;
          height: calc(100% / 5);
        }

        p:nth-child(2) {
          transition-delay: 200ms;
        }
        p:nth-child(3) {
          transition-delay: 400ms;
        }
        p:nth-child(4) {
          transition-delay: 600ms;
        }
        p:nth-child(5) {
          transition-delay: 800ms;
        }
      }
    }
  }
`;
