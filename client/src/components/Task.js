const Task = ({ task, handleDelete, toggleReminder }) => {
  return (
    <div className="task_container">
      <div
        className={`task ${task.reminder ? "border" : ""}`}
        onDoubleClick={() => toggleReminder(task.id)}
      >
        <div className="flex">
          <h4>{task.text}</h4>
          <i
            className="ri-close-fill close_icon"
            onClick={() => handleDelete(task.id)}
          ></i>
        </div>
        <p>{task.day}</p>
      </div>
    </div>
  );
};
export default Task;
