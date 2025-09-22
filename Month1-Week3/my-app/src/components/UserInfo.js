import styled from "styled-components";

const Countainer = styled.div`
  padding-top: 5rem;
  text-align: center;
  h5 {
    font-size: 25px;
    margin: 10px 0 10px 0;
    color: #333333;
    font-weight: 600;
  }
  h6 {
    font-size: 18px;
    margin: 0 0 30px 0;

    color: #777777;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    margin: 12px 0;
    color: #777777;
    font-weight: 400;
  }
`;
const UserInfo = (props) => {
  return (
    <Countainer>
      <h5>{props.name}</h5>
      <h6>{props.job}</h6>
      <p> {props.text1}</p>
      <p> {props.text2}</p>
      <p> {props.text3}</p>
    </Countainer>
  );
};

export default UserInfo;
