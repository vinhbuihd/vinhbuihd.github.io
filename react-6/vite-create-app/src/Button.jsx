const Button = (props) => (
  <button onClick={props.clearList} className="btn btn-clear">
    {props.label}
  </button>
);

export default Button;
