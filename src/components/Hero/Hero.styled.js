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

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .hero__title {
    font-size: 30px;
    margin-bottom: 30px;
    color: var(--white-color);
    text-shadow: 1px 1px #000000;

    @media (min-width: 768px) {
      font-size: 40px;
    }

    @media (min-width: 1200px) {
      font-size: 50px;
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
