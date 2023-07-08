import styled from 'styled-components';

export const PrinciplesSection = styled.section`
  background-color: #ffffff;

  .principles__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--white-color);

    .principles__text {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }

      h3 {
        font-size: 25px;
        font-weight: 200;
        color: var(--black-color);
        margin-bottom: 30px;

        @media (min-width: 768px) {
          font-size: 30px;
        }
      }

      ul {
        padding-left: 15px;
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
