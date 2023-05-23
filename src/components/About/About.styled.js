import styled from 'styled-components';

export const AboutSection = styled.section`
  height: 100vh;
  background: linear-gradient(45deg, var(--bg-pink-color) 50%, var(--bg-black-color) 50%);

  .about__container {
    @media (min-width: 768px) {
      display: flex;
    }
  }

  .about__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    padding-bottom: 20px;

    h2 {
      font-size: 60px;
      color: var(--white-color);
      margin-bottom: 10px;

      span {
        color: var(--bg-pink-color);
        text-shadow: -1px 1px 0 var(--white-color), 1px 1px 0 var(--white-color),
          1px -1px 0 var(--white-color), -1px -1px 0 var(--white-color);
      }
    }

    p {
      width: 90%;
      font-size: 20px;

      color: var(--white-color);
      @media (min-width: 1200px) {
        width: 80%;
      }

      @media (min-width: 1200px) {
        width: 50%;
      }
    }
  }

  .about__img {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
    object-position: right;

    @media (min-width: 768px) {
      object-position: center;
      width: 40%;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;
