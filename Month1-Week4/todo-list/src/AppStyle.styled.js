import styled from "styled-components";
export const AppStyle = styled.div`
  text-align: center;
  padding: 0.5rem;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  margin: 3rem auto;
  max-width: 1000px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
