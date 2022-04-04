import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todolist">
      {props.list.map((job) => (
        <Todo
          key={job.id}
          job={job.name}
          dataset={job.id}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
