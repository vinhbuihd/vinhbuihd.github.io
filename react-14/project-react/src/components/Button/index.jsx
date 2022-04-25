import "./Button.css";

const Button = ({ title, type, style }) => {
  return (
    <button className={`btn ${type}`} style={style}>
      {title}
    </button>
  );
};

export default Button;
