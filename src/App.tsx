import { useState } from "react";
import { HomePage } from "./pages/main";
import { GlobalStyle } from "./globalTheme";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
