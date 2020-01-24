import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');

  background: #fff;
  width: 100%;
  max-width: 400px;
  text-align: center;
  padding: 25px;
  border-radius: 4px;

  span {
    color: #3c4043;
    font-size: 30px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;

    strong {
      color: #cac531;
      font-weight: 900;
      letter-spacing: 2px;
    }
  }

  hr {
    background: linear-gradient(to right, #eee, #cac531, #eee);
    height: 1px;
    border: 0;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      font-size: 16px;
      font-weight: 300;
      padding: 10px 15px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }

    button {
      width: 100%;
      height: 40px;
      color: #fff;
      background: #cac531;
      border-radius: 4px;
      border: 0;
      margin-top: 10px;

      &:hover {
        background: ${darken(0.01, '#cac531')};
      }
    }
  }
`;
