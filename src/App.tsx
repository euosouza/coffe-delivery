import { BrowserRouter } from "react-router-dom";
import { ThemeProvider  } from "styled-components";

import { Router } from "./Router";

import { GlobalStyles } from "./assets/styles/globlal";
import { theme } from "./assets/styles/theme";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/coffee-delivery">
        <GlobalStyles/>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
