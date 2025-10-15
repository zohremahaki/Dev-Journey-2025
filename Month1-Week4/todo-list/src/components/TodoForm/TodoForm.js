import {
  BtnsStyle,
  BtnStyle,
  Container,
  InputStyle,
  Overlay,
} from "./TodoForm.styled";

const TodoForm = (props) => {
  return (
    <div>
      <Overlay></Overlay>

      <Container onSubmit={props.submitFormHandler}>
        <h3>NEW NOTE</h3>
        <InputStyle
          type="text"
          placeholder="Input your note..."
          ref={props.inputRef}
        />
        <BtnsStyle>
          <BtnStyle type="cancel" onClick={props.cancel}>
            CANCEL
          </BtnStyle>
          <BtnStyle type="submit" onClick={props.applyHandler}>
            APPLY
          </BtnStyle>
        </BtnsStyle>
      </Container>
    </div>
  );
};

export default TodoForm;
