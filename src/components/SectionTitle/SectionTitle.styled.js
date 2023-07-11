import styled from 'styled-components';

export const PhotoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40vh;

  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    color: var(--white-color);
    text-transform: uppercase;
    font-weight: 100;
    font-size: 7vh;
    padding: 10px;

    @media (min-width: 768px) {
      font-size: 10vh;
    }
  }
`;
