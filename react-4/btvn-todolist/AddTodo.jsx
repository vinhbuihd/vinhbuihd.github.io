const AddTodo = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        onChange={props.handleChange}
        value={props.inputText}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};
