import styled from "styled-components";

const CardCountainer = styled.div`
  height: 28rem;
  width: 30rem;
  background: #ffffff;
  border-radius: 10px;
  align-self: flex-end;
   position: relative;
`;
const Cardinfo = (props) => {
  return <CardCountainer>
{props.children}
  </CardCountainer>;
};

export default Cardinfo;
