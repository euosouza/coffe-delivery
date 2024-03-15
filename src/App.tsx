import { BrowserRouter } from "react-router-dom";
import { ThemeProvider  } from "styled-components";

import { Router } from "./Router";

import { GlobalStyles } from "./styles/globlal";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles/>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
