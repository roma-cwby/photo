import styled from 'styled-components';

export const AppList = styled.ul`
  position: relative;
  z-index: 5;

  background-color: transparent;

  height: 100vh;
  width: 100vw;

  overflow: hidden;

  .app-list__item {
    position: absolute;

    top: 99vh;
    left: 0;
    z-index: 10;

    overflow-y: auto;

    width: inherit;
    height: inherit;
    min-height: inherit;

    transition: top 0.5s ease-out 100ms;

    background-color: transparent;

    &.show {
      top: 0;
    }
  }
`;
