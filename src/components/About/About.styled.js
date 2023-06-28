import styled from 'styled-components';

export const AboutSection = styled.section`
  min-height: 100vh;

  background: linear-gradient(45deg, #000010, #100010);

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
        text-align: center;
        font-weight: 300;
        font-size: 50px;
        color: var(--white-color);
        margin-bottom: 30px;
      }

      p {
        font-size: 20px;
        font-weight: 300;
        color: #ffffff99;
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

      img {
        width: 100%;
        height: 180px;

        object-fit: cover;
        object-position: center;

        @media (min-width: 1200px) {
          height: 200px;
        }
      }
    }
  }
`;
