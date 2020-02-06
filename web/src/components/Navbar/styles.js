import styled from 'styled-components';

export const Container = styled.nav`
  height: 100%;
  background: #1c1f22;
  grid-area: nav;
  display: flex;
  align-items: center;
  flex-direction: column;

  hr {
    width: 80%;
    background: linear-gradient(to right, #1c1f22, #cac531, #1c1f22);
    height: 1px;
    border: 0;
    margin-top: 10px;
  }
`;

export const Categories = styled.div`
  width: 100%;
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-top: 50px;
  margin-bottom: 10px;
  padding-left: 30px;
`;

export const NavList = styled.ul`
  width: 100%;

  a {
    color: #a5a9ad;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    height: 40px;
    transition: 0.3s;
    padding-left: 30px;
    letter-spacing: 0.5px;

    &:hover {
      color: #fff;
      background: rgba(202, 197, 49, 0.7);
    }

    svg {
      font-size: 20px;
      margin-right: 15px;
    }
  }
`;

export const Logo = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');

  color: #fff;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;

  strong {
    color: #cac531;
    font-weight: 900;
    letter-spacing: 2px;
  }
`;
