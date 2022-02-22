import styled from '@emotion/styled';

export const StyledButton = styled.button`
  border: none;
  width: 100px;
  padding: 10px;
  cursor: pointer;
  background: #9b9b9b;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background: #abaaaa;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
