import "./App.css";

import Paragrafo from "./components/paragrafo/paragrafo.js";
import Botao from "./components/botao/botao.js";

function App() {
  return (
    <>
      <Paragrafo color="hotpink" text="Olá! Eu sou um parágrafo" />
      <Botao label="Label customizada" />
    </>
  );
}

export default App;
