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
          font-size: 30px;
          font-weight: 300;

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

        p {
          width: 50%;
          height: calc(100% / 5 * 2);

          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;

          animation: show 15s linear infinite;

          color: transparent;

          transition: background-color 500ms linear;

          background-color: transparent;
        }

        p:last-of-type {
          width: 100%;
          height: calc(100% / 5);
        }

        p:nth-child(2) {
          animation-delay: 1s;
        }
        p:nth-child(3) {
          animation-delay: 2s;
        }
        p:nth-child(4) {
          animation-delay: 3s;
        }
        p:nth-child(5) {
          animation-delay: 4s;
        }

        @keyframes show {
          0% {
            background-color: transparent;
            color: transparent;
          }
          30% {
            background-color: #ffffff;
            color: #000000;
          }
          70% {
            background-color: #ffffff;
            color: #000000;
          }
          100% {
            background-color: transparent;
            color: transparent;
          }
        }
      }
    }
  }
`;
