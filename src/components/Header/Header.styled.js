import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  font-size: 20px;
  background-color: transparent;

  transition: background-color var(--transition), background-filter var(--transition);

  backdrop-filter: blur(5px);

  &.open {
    background-color: #00000090;
    backdrop-filter: none;
  }

  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 5px;
    padding-bottom: 5px;
  }

  .header__logo {
    img {
      height: 40px;
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
    -webkit-text-stroke: 1px silver;

    transition: color 300ms linear;
    margin-right: 10px;

    &:hover,
    &:focus {
      -webkit-text-stroke: 0;
      color: var(--accent-color);
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
      outline: 1px solid silver;

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
      outline: 1px solid silver;

      background-color: var(--header-link-color);
    }

    &.open::before {
      left: -20%;
      top: 40%;
      width: 28px;
      transform: rotate(45deg);
      outline: none;
    }

    &.open::after {
      left: -20%;
      bottom: 40%;
      width: 28px;
      transform: rotate(-45deg);
      outline: none;
    }
  }
`;
