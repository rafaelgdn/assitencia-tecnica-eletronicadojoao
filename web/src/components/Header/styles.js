import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  grid-area: header;

  svg {
    font-size: 30px;
    color: #aaa;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: 500;
    margin-right: 10px;
    color: #aaa;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
`;
