import styled from '@emotion/styled';

export const Paragraph = styled.p`
  font-size: ${({ fz }) => fz || 20};
  font-weight: ${({ fw }) => fw || 500};

  & b {
    font-size: 20px;
    font-weight: 600;
    color: #915050;
  }
`;


