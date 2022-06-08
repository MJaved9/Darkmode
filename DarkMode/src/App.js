import logo from "./logo.svg";
import "./App.css";
import Figma from "./components/Figma";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Figma />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
