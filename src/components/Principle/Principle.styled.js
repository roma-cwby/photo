import styled from 'styled-components';

export const PrinciplesSection = styled.section`
  min-height: 100vh;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .principles__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    min-height: inherit;

    padding-top: 100px;
    padding-bottom: 100px;

    h2 {
      font-size: 25px;
      width: 80%;
      display: inline;
      color: var(--bg-pink-color);
      text-shadow: -1px 1px 0 #000000, 1px 1px 0 #000000, 1px -1px 0 #000000, -1px -1px 0 #000000;
      margin-bottom: 20px;

      @media (min-width: 1200px) {
        width: 40%;
      }
    }

    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      border-bottom-right-radius: 20px;
      border-bottom: 2px solid var(--bg-pink-color);
      border-right: 2px solid var(--bg-pink-color);

      @media (min-width: 1200px) {
        flex-wrap: nowrap;
        border: none;
      }

      li {
        color: var(--white-color);
        font-size: 20px;
        padding: 10px;
        width: 100%;
        text-shadow: 1px 1px #000000;

        @media (min-width: 768px) {
          width: calc(100% / 2);
        }

        @media (min-width: 1200px) {
          width: calc(100% / 5);

          &:first-of-type {
            border-bottom-left-radius: 20px;
            border-bottom: 2px solid var(--bg-pink-color);
            border-left: 2px solid var(--bg-pink-color);
          }

          &:last-of-type {
            border-top-right-radius: 20px;
            border-top: 2px solid var(--bg-pink-color);
            border-right: 2px solid var(--bg-pink-color);
          }
        }
      }
    }
  }
`;
