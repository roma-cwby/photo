import styled from 'styled-components';

export const ContactsSection = styled.section`
  position: relative;
  padding-top: 100px;
  background-color: #101010;
  background-repeat: no-repeat;
  overflow: hidden;

  img {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
    object-position: 0 25%;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .contacts__container {
    h2 {
      padding: 0 10px;
      text-align: center;
      font-size: 20px;
      font-weight: 300;
      margin: 0 0 100px 0;
      width: 100%;

      color: var(--white-color);

      @media (min-width: 768px) {
        font-size: 25px;
        width: 70%;
        margin: 0 auto 100px auto;
      }
    }
  }

  .contacts__social {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    a:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;
