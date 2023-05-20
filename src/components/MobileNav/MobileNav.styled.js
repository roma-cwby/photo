import styled from 'styled-components';

export const MobileNavWrap = styled.div`
  position: absolute;
  left: 20%;
  bottom: -190%;
  width: 80%;
  z-index: 10;

  display: block;

  height: 100px;

  background-color: transparent;
  backdrop-filter: blur(5px);

  transition: transform 300ms linear;

  transform: translateX(101%);

  @media (min-width: 768px) {
    display: none;
  }

  &.open {
    transform: translateX(0);
  }

  .mobile-nav .header__link {
    margin-right: 0;
    text-align: center;
    display: block;
  }
`;
