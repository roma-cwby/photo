import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  width: 100vw;

  overflow: hidden;

  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  .hero__container {
    min-height: inherit;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero__title {
    font-size: 30px;
    font-weight: 100;

    text-align: center;
    color: var(--white-color);

    @media (min-width: 768px) {
      font-size: 40px;
    }

    @media (min-width: 1200px) {
      font-size: 50px;
    }

    span {
      font-size: 20px;

      @media (min-width: 768px) {
        font-size: 25px;
      }

      @media (min-width: 1200px) {
        font-size: 30px;
      }
    }
  }
`;
