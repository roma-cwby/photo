import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

  outline: 1px solid red;

  font-size: 20px;

  .header__container {
    display: flex;
    justify-content: space-between;

    padding-top: 15px;
    padding-bottom: 15px;
  }

  .header__nav {
    display: block;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .header__link {
    color: red;

    transition: color 300ms linear;
    margin-right: 10px;

    &:hover,
    &:focus {
      color: green;
    }
  }
  /* 
  .header__link:not(:last-of-type) {
    margin-right: 10px;
  } */

  .header__language-btn {
    color: black;

    transition: color 300ms linear;

    background-color: transparent;

    &:hover,
    &:focus {
      color: red;
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
      height: 5px;

      transition: all 300ms linear;

      border-radius: 5px;

      background-color: black;
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      display: inline-block;
      width: 20px;
      height: 5px;

      transition: all 300ms linear;

      border-radius: 5px;

      background-color: black;
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
