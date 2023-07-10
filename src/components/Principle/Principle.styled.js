import styled from 'styled-components';

export const PrinciplesSection = styled.section`
  background-color: #ffffff;
  padding: 100px 0;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }

  .principles__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: transparent;

    .principles__text {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }

      h3 {
        position: relative;

        font-size: 25px;
        font-weight: 200;
        color: var(--black-color);
        margin-bottom: 30px;
        padding-bottom: 20px;

        &::after {
          position: absolute;
          bottom: 0;
          left: 50%;

          transform: translateX(-50%);

          content: '';
          width: 30%;
          height: 3px;

          background-color: silver;
        }

        @media (min-width: 768px) {
          font-size: 30px;
        }
      }

      h4 {
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        color: var(--black-color);
        margin-bottom: 30px;

        @media (min-width: 768px) {
          font-size: 23px;
        }
      }

      ul {
        padding: 20px 20px;
        border-left: 3px solid silver;
        list-style: inside;

        li {
          color: var(--black-color);
          font-size: 20px;
          font-weight: 300;

          @media (min-width: 768px) {
            font-size: 17px;
          }

          &:not(:last-of-type) {
            margin-bottom: 10px;
          }
        }
      }
    }

    img {
      display: none;
      width: 40%;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }
`;
