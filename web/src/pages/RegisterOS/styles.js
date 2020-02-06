import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  strong {
    display: block;
    font-size: 18px;
    color: #1c1f22;
  }

  span {
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 500;
    color: #798086;
  }

  form {
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;

    input {
      border-radius: 4px;
      padding: 5px 10px;
      margin: 15px 10px;
      width: 250px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      button {
        padding: 5px 10px;
        width: 100px;
        border-radius: 4px;
        margin-left: 5px;
        /* background: #1c1f22; */
        color: #fff;
        transition: 0.2s;
      }
    }
  }
`;

export const CancelButton = styled.button`
  background: #1c1f22;

  &:hover {
    background: ${lighten(0.05, '#1c1f22')};
  }
`;

export const SubmitButton = styled.button`
  background: ${darken(0.05, '#cac531')};

  &:hover {
    background: ${darken(0.1, '#cac531')};
  }
`;

export const RegisterArea = styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 30px 60px 0px 60px;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;

    strong {
      display: block;
      color: #1c1f22;
    }
  }

  h1 {
    color: #1c1f22;
    font-size: 18px;
    width: 100%;
    padding: 10px;
  }
`;
