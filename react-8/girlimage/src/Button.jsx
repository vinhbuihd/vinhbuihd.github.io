const Button = (props) => {
  return (
    <button
      className="btn btn-primary"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default Button;
