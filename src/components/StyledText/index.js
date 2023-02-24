const StyledText = (props) => {
  return <p style={{ color: props.color }}>{props.text.toUpperCase()}</p>;
};

StyledText.defaultProps = {
  color: "purple",
  text: "Lorem ipsum dolor",
};

export default StyledText;
