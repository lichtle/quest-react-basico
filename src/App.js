import "./App.css";

import Paragrafo from "./components/StyledText";
import AlertButton from "./components/AlertButton";

function App() {
  return (
    <>
      <Paragrafo color="hotpink" text="Olá! Eu sou um parágrafo" />
      <AlertButton label="Label customizada" />
    </>
  );
}

export default App;
