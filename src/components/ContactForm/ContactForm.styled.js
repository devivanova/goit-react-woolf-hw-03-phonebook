import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  border: 1px solid #838383;
  padding: 20px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 5px;
`;
export const Button = styled.button`
  width: 120px;
  padding: 5px 15px;
  border: 1px solid #838383;
  outline: none;
  background-color: #c28fff;
  &:hover {
    background-color: #d9b9ff;
  }
  &:focus {
    background-color: #d9b9ff;
  }
  &:active {
    background-color: #d9b9ff;
  }
`;