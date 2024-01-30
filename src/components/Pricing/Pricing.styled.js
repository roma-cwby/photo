import styled from 'styled-components';

export const PricingSection = styled.section`
  height: auto;
  padding-bottom: 100px;
  background-color: transparent;

  .pricing__container {
    text-align: center;

    h2 {
      color: var(--white-color);
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
      padding-bottom: 20px;

      li {
        width: 100%;

        padding: 20px 20px 40px 20px;

        border-radius: 50px;
        background-color: #101010dd;
        box-shadow: 5px 5px 10px #000000, -5px -5px 10px #202020;

        &:not(:last-of-type) {
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          width: calc(100% / 2 - 30px);
          &:not(:last-of-type) {
            margin-bottom: 20px;
          }
        }

        @media (min-width: 1200px) {
          width: calc(100% / 3 - 40px);
          height: 470px;

          &:not(:last-of-type) {
            margin-bottom: 0;
          }
        }

        h3 {
          color: silver;
          font-size: 20px;
          font-weight: 300;
          padding-bottom: 20px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        h4 {
          color: var(--white-color);
          font-weight: 200;
          font-size: 45px;
          margin-bottom: 50px;
        }

        p:not(:last-of-type) {
          margin-bottom: 20px;
        }

        p {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          position: relative;

          color: silver;

          padding-left: 40px;
          width: 100%;

          svg {
            position: absolute;
            top: -5px;
            left: 0;

            fill: #00ff00;
            min-width: 30px;
            min-height: 30px;
            /* margin-right: 10px; */
          }
        }
      }
    }
    .pricing-plus {
      max-width: 100%;
      width: auto;
      padding: 20px;

      color: var(--white-color);

      border-radius: 50px;
      background-color: #101010dd;
      box-shadow: 5px 5px 10px #000000, -5px -5px 10px #202020;
    }
  }
`;
