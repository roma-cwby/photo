import styled from 'styled-components';

export const MobileNavWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;

  padding: 20px 0 10px 0;

  display: block;

  background-color: rgba(0, 0, 0, 0.8);
  /* backdrop-filter: blur(5px); */

  transition: transform 300ms linear;

  transform: translateY(-201%);

  @media (min-width: 768px) {
    display: none;
  }

  &.open {
    transform: translateY(100%);
  }

  .mobile-nav {
    .header__link {
      margin-right: 0;
      text-align: center;
      display: block;
      text-shadow: none;

      &:not(:last-of-type) {
        margin-bottom: 5px;
      }
    }
  }
`;
