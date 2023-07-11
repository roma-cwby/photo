import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: #101010;
  padding: 20px 0;

  display: flex;
  align-items: baseline;
  justify-content: center;

  a {
    margin-right: 20px;
    font-family: 'Calligraffitti', 'sans-serif';
    color: var(--header-link-color);
    font-size: 20px;
    font-weight: 700;
    transition: color var(--transition);

    @media (min-width: 768px) {
      font-size: 27px;
    }

    &:hover {
      color: var(--accent-color);
    }
  }

  p {
    color: var(--white-color);
    font-size: 20px;
  }
`;
