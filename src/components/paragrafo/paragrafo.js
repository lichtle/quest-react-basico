const Paragrafo = (props) => {
  return <p style={{ color: props.color }}>{props.text.toUpperCase()}</p>;
};

Paragrafo.defaultProps = {
  color: "purple",
  text: "Lorem ipsum dolor",
};

export default Paragrafo;
