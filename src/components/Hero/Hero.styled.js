import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  width: 100vw;

  overflow: hidden;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .hero__container {
    min-height: inherit;
    position: relative;
  }

  .hero__wrap {
    min-height: inherit;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .hero__title {
    font-size: 50px;
    margin-bottom: 30px;
    color: var(--white-color);
    text-shadow: 1px 1px #000000;

    @media (min-width: 768px) {
      font-size: 70px;
    }

    @media (min-width: 1200px) {
      font-size: 10vh;
    }
  }

  .hero__text {
    width: 100%;

    padding: 10px;
    font-size: 20px;

    text-shadow: 1px 1px #000000;

    margin-bottom: 30px;

    border-radius: 20px;
    border-left: 2px solid var(--white-color);
    border-bottom: 2px solid var(--white-color);

    color: var(--white-color);

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (min-width: 1200px) {
      font-size: 25px;
    }
  }

  .hero__social {
    height: 50px;
    display: flex;
    justify-content: flex-end;

    & a:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;
