import styled from 'styled-components';

export const TermsSection = styled.section`
  width: 100%;
  min-height: 100%;
  text-align: center;
  padding-bottom: 100px;

  background-color: #000000bb;

  .terms__container {
    h2 {
      color: var(--white-color);
      margin-bottom: 20px;
    }

    p {
      color: var(--white-color);
      font-size: 20px;
    }
  }

  .terms__list-wrapper {
    display: block;

    margin-bottom: 20px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    ul {
      width: 100%;

      @media (min-width: 768px) {
        width: 47%;
      }

      li {
        width: 100%;
        padding: 10px 5px;
        text-align: left;

        font-size: 17px;
        font-weight: 300;

        color: var(--white-color);

        border-radius: 20px;

        &:not(:last-of-type) {
          margin-bottom: 10px;
        }

        @media (min-width: 768px) {
          font-size: 18px;
        }

        @media (min-width: 1200px) {
          font-size: 20px;
        }
      }
    }
  }
`;
