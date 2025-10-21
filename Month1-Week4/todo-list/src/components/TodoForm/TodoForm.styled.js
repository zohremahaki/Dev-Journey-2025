import styled from "styled-components";

export const Container = styled.form`
  width: 40%;
  height: 15rem;
  padding: 2rem 0;
  border-radius: 20px;
  margin: 8rem auto;
    background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.inputBorder};

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001; 
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: 1000;
`;
export const InputStyle = styled.input`
  width: 70%;
  padding: 0.4rem;
    border: 1px solid ${({ theme }) => theme.inputBorder};

  border-radius: 3px;
  background: ${({ theme }) => theme.background};

  &::placeholder {
    color: ${({ theme }) => theme.placeHolderColor};
  }
`;

export const BtnsStyle = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;

  padding: 0 2rem;
`;

export const BtnStyle = styled.button`
  width: 5.5rem;
  padding: 0.4rem;
  border: 1px solid #6c63ff;
  border-radius: 3px;
  font-weight: bold;
  color: #6c63ff;
  pointer: cursor;
`;
