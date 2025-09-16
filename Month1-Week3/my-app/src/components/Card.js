import styled from "styled-components";

const CardCountainer = styled.div`
  width: 25rem;
  height: 40rem;
  background: url("/images/image4.jpg") center/cover no-repeat;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50rem;
  margin: 8rem auto;
`;

const Card = (props) => {
  return <CardCountainer>{props.children}</CardCountainer>;
};

export default Card;
