import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 100px 100px;
  margin: 20px auto;
  gap: 1rem;

  // border: 1px solid ${({ theme }) => theme.border};
  // background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; /* موبایل: دو ستون */
    gap: 0.5rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 85%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 35px 8px 12px; /* padding راست برای آیکون */

  border-radius: 3px;
  // border: 1px solid #6c63ff;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  background: ${({ theme }) => theme.background};
  &::placeholder {
    color: ${({ theme }) => theme.placeHolderColor};

    
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.searchIconColor};
  pointer-events: none; /* کلیک روی آیکون رو ازاد می‌کنه */
`;
