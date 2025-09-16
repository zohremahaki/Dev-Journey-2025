import styled from "styled-components";

const Countainer = styled.div`
  margin-top: 130px;
  text-align: center;
  h5 {
    font-size: 25px;
    margin: 10px 0 10px 0;
    color: #333333;
    font-weight: 600;
  }
  h6 {
    font-size: 18px;
    margin: 0 0 20px 0;

    color: #777777;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    margin: 5px 0;
    color: #777777;
    font-weight: 400;
  }
`;
const TestInfo = () => {
  return (
    <Countainer>
      <h5>Zohre Mahaki</h5>
      <h6>Front-End Developer</h6>
      <p> Coding with coffee ☕ and creativity</p>
      <p> Always learning, always growing</p>
      <p> Turning ideas into reality</p>
    </Countainer>
  );
};

export default TestInfo;
