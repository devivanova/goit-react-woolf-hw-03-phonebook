import styled from 'styled-components';

export const ContactList = styled.li`
  display: flex;
  gap: 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const DeleteButton = styled.button`
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