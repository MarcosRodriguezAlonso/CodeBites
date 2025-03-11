import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  background-color: rgb(144, 51, 51);
  color: white;
  box-shadow: 0 2px 5px rgba(15, 15, 15, 0.7);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;

  &:hover {
    background-color: rgb(217, 121, 121);
  }
`;
