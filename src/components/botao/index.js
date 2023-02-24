const AlertButton = (props, showLabel) => {
  return (
    <button
      onClick={() => {
        alert(`A label desse botão é: ${props.label}`);
      }}
    >
      {props.label}
    </button>
  );
};

Botao.defaultProps = {
  label: "Label padrão",
};

export default AlertButton;
