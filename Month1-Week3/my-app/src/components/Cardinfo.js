import styled from "styled-components";

const CardCountainer = styled.div`
  height: 28rem;
  width: 25rem;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 11.93rem;
`;
const Cardinfo = (props) => {
  return <CardCountainer>{props.children}</CardCountainer>;
};

export default Cardinfo;
