import propTypes from "prop-types";

export default function Button({ text, onClick, showAddTask }) {
  return (
    <div>
      <button
        className={`btn ${showAddTask ? "redcolor" : "greencolor"}`}
        onClick={onClick}
      >
        {showAddTask ? "Close" : "Add"}
      </button>
    </div>
  );
}
// Button.defaultProps = {
//   text: "Add",
// };
Button.prototype = {
  text: propTypes.string,
};
