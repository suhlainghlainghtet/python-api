import propTypes from "prop-types";
import Button from "../components/Button";
export default function Header({ title, onAddAndClose, showAddTask }) {
  return (
    <div className="header_container">
      <div className="task_tracker">
        <h3>{title}</h3>
        <Button text="Add" onClick={onAddAndClose} showAddTask={showAddTask} />
      </div>
    </div>
  );
}
Header.defaultProps = {
  title: "Task Tracker",
};
Header.prototype = {
  title: propTypes.string,
};
