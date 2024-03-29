import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  font-size: 20px;
  background: linear-gradient(transparent 5%, #000000);
  /* background-color: transparent; */

  transition: background-color var(--transition), background-filter var(--transition);

  /* backdrop-filter: blur(5px); */

  &.open {
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: none;
  }

  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 15px;
    padding-bottom: 15px;
  }

  .header__logo {
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
      cursor: pointer;
    }
  }

  .header__nav {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .header__link {
    color: var(--header-link-color);
    font-weight: 400;
    /* -webkit-text-stroke: 1px silver; */

    transition: color 300ms linear;
    margin-right: 10px;

    &:hover,
    &:focus {
      -webkit-text-stroke: 0;
      color: var(--accent-color);
      cursor: pointer;
    }
  }
  /* 
  .header__link:not(:last-of-type) {
    margin-right: 10px;
  } */

  .header__language-btn {
    width: 25px;
    height: 25px;

    border-radius: 50%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &:hover,
    &:focus {
      cursor: pointer;
    }
  }

  .header__mobile-btn {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;

    background-color: transparent;

    @media (min-width: 768px) {
      display: none;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      display: inline-block;
      width: 20px;
      height: 4px;

      transition: all 300ms linear;

      border-radius: 5px;
      /* outline: 1px solid silver; */

      background-color: var(--header-link-color);
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      display: inline-block;
      width: 20px;
      height: 4px;

      transition: all 300ms linear;

      border-radius: 5px;
      /* outline: 1px solid silver; */

      background-color: var(--header-link-color);
    }

    &.open::before {
      left: -20%;
      top: 40%;
      width: 28px;
      transform: rotate(45deg);
    }

    &.open::after {
      left: -20%;
      bottom: 40%;
      width: 28px;
      transform: rotate(-45deg);
    }
  }
`;
