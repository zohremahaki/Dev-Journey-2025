import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppStyle } from "./AppStyle.styled";
import Container from "./components/Container/Container";
import { darkTheme, lightTheme } from "./components/theme";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleModeHandler = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <Container toggleMode={toggleModeHandler} mode={mode} />
      </AppStyle>
    </ThemeProvider>
  );
};

export default App;
