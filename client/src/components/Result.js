import Task from "./Task";
export default function Result({ tasks, handleDelete, toggleReminder }) {
  return (
    <div>
      {tasks.map((item) => {
        return (
          <Task
            key={item.id}
            task={item}
            handleDelete={handleDelete}
            toggleReminder={toggleReminder}
          />
        );
      })}
    </div>
  );
}
