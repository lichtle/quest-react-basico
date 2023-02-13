const Botao = (props, showLabel) => {
  showLabel = () => {
    console.log("A label desse botão é: " + "'" + props.label + "'");
  };

  return <button onClick={showLabel}>{props.label}</button>;
};

Botao.defaultProps = {
  label: "Label padrão",
};

export default Botao;
