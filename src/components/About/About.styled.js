import styled from 'styled-components';

export const AboutSection = styled.section`
  min-height: 100vh;

  background: linear-gradient(transparent 10%, #ffffff 80%);

  .about__container {
    min-height: inherit;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    img {
      width: 100%;
      margin-bottom: 20px;
      @media (min-width: 768px) {
        width: 50%;
        margin: 0;
      }
    }

    .about__text {
      width: 100%;

      @media (min-width: 768px) {
        width: 45%;
      }

      h2 {
        position: relative;
        text-align: center;
        font-weight: 300;
        font-size: 50px;
        color: var(--black-color);
        margin-bottom: 30px;

        &::before {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;

          transform: translateX(-50%);

          width: 10%;
          height: 2px;

          background-color: var(--black-color);
        }
      }

      p {
        font-size: 20px;
        font-weight: 300;
        color: var(--black-color);
        margin-bottom: 30px;
      }

      .about__social {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 30px;

        @media (min-width: 768px) {
          display: block;
        }

        a {
          svg {
            width: 50px;
            fill: var(--black-color);

            transition: fill var(--transition);

            &:hover {
              fill: var(--accent-color);
            }

            @media (min-width: 768px) {
              width: 40px;
            }

            @media (min-width: 1200px) {
              width: 30px;
            }
          }
        }

        a:not(:last-of-type) {
          margin-right: 15px;
        }
      }
    }
  }
`;
