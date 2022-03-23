const Todo = (props) => {
  return (
    <p className="todo-text" dataset={props.dataset}>
      <span className="todo-content">{props.job}</span>
      <span className="todo-delete" onClick={props.handleDelete}>
        <i className="bi bi-trash"></i>
      </span>
    </p>
  );
};
