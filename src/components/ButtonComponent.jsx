const ButtonComponent = function (props) {
  return <button style={props.buttonStyle}> {props.content ? props.content : "Superpippo"}</button>;
};

export default ButtonComponent;
