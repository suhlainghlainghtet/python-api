import { useState } from "react";

export default function TaskForm({ handleAddTask, tasks }) {
  let taskIndex = tasks.length - 1;
  let taskId = tasks[taskIndex].id;
  // console.log("taskIndex and taskId from taskForm...", taskIndex, taskId);

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const taskFormSubmit = (e) => {
    e.preventDefault();
    if (!(text || day) || !(text && day)) {
      alert("please fill information!");
      return;
    }

    const increaseId = () => {
      return (taskId += 1);
    };
    const id = increaseId();
    handleAddTask({ id, text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="task_form_group" onSubmit={taskFormSubmit}>
      <div className="task_form_control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="task_form_control">
        <label htmlFor="task">Day & Time</label>
        <input
          type="text"
          id="task"
          placeholder="Add Day & Time"
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="task_form_control checkbox">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          id="reminder"
          value={reminder}
          onClick={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
}
