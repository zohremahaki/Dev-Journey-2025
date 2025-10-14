import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 15rem;
  padding: 2rem 0;
  border-radius: 20px;
  margin: 8rem auto;
  background: #f7f7f7;
`;
const InputStyle = styled.input`
  width: 70%;
  padding: 0.4rem;
  border: 1px solid #6c63ff;
  border-radius: 3px;

  &::placeholder {
    color: #c3c1e5;
  }
`;

const BtnsStyle = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;

  padding: 0 2rem;
`;

const BtnStyle = styled.button`
  width: 5.5rem;
  padding: 0.4rem;
  border: 1px solid #6c63ff;
  border-radius: 3px;
  font-weight: bold;
  color: #6c63ff;
  pointer: cursor;
`;
const TodoForm = () => {
  return (
    <Container>
      <h3>NEW NOTE</h3>
      <InputStyle type="text" placeholder="Input your note..." />
      <BtnsStyle>
        <BtnStyle type="submit">APPLY</BtnStyle>
        <BtnStyle type="cancel">CANCEL</BtnStyle>
      </BtnsStyle>
    </Container>
  );
};

export default TodoForm;
