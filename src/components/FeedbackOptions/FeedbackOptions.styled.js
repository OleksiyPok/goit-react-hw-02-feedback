import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.span``;

export const ButtonsContainer = styled.div`
  display: flex;
  /* gap: 10px; */
  justify-content: space-around;
  margin-top: 20px;
`;

export const Button = styled.button`
  min-width: 100px;
  border: solid 1px;
  border-radius: 4px;
`;
