import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import TaskForm from "./components/TaskForm";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    fetchTasksData();
  }, []);

  // fetch data from Server
  const fetchTasksData = async () => {
    const response = await fetch("http://localhost:8000/tasks");
    const data = await response.json();
    setTasks(data);
  };
  const fetchTask = async (taskId) => {
    const response = await fetch(`http://localhost:8000/tasks/${taskId}`);
    const data = await response.json();
    return data;
  };

  // Toggle Add and Close
  const toggleAddClose = () => {
    setShowAddTask(!showAddTask);
  };

  // Delete task
  const handleDelete = async (taskId) => {
    const response = await fetch(`http://localhost:8000/tasks/${taskId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setTasks(data);
  };
  // Toggle reminder
  const toggleReminder = async (taskId) => {
    const toggleTask = await fetchTask(taskId);
    const updToggleTask = { ...toggleTask, reminder: !toggleTask.reminder };
    const response = await fetch(`http://localhost:8000/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updToggleTask),
    });
    const data = await response.json();

    setTasks(
      tasks.map((item) =>
        item.id === taskId ? { ...item, reminder: data.reminder } : item
      )
    );
  };
  // Add Task
  const handleAddTask = async (task) => {
    const response = await fetch(`http://localhost:8000/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <h2>React Course For Beginner</h2>
      <div className="app_container">
        <Header onAddAndClose={toggleAddClose} showAddTask={showAddTask} />
        {showAddTask && (
          <TaskForm handleAddTask={handleAddTask} tasks={tasks} />
        )}
        {tasks.length > 0 ? (
          <Result
            tasks={tasks}
            handleDelete={handleDelete}
            toggleReminder={toggleReminder}
          />
        ) : (
          "No Tasks To Show"
        )}

        <Footer />
      </div>
    </div>
  );
}
