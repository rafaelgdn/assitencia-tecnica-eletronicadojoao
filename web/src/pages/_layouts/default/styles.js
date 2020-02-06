import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f2f2f2;
  height: 100%;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'nav header'
    'nav content';
`;

export const Content = styled.div`
  height: 100%;
  grid-area: content;
  padding: 20px;
`;
