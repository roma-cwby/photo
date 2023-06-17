import styled from 'styled-components';

export const ProcessSection = styled.section`
  display: flex;
  align-items: center;

  background-position: 0 95%;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 150px 0;

  .section__container {
    text-align: center;
    height: auto;

    h2 {
      color: var(--black-color);
      font-size: 40px;
      font-weight: 200;

      margin-bottom: 100px;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;

      width: 100%;

      li {
        width: 100%;
        height: 150px;

        margin-bottom: 20px;

        border-bottom: 1px solid #000000;

        @media (min-width: 768px) {
          width: calc(100% / 2);
          border: none;
          height: 200px;
        }

        @media (min-width: 1200px) {
          width: calc(100% / 5);
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 20px;

          margin-bottom: 10px;

          width: 50px;
          height: 50px;

          border-radius: 50%;

          background-color: var(--black-color);
          color: var(--white-color);

          @media (min-width: 768px) {
            margin: 0 auto 20px auto;
          }
        }

        p {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 5px 10px;

          font-size: 18px;

          color: var(--black-color);

          @media (min-width: 768px) {
            font-size: 20px;
          }
        }
      }
    }
  }
`;
