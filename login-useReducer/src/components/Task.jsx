import React from "react";

const Task = ({ task, handleCompletion, handleDelete }) => {
  const { desc, id, completed } = task;
  return (
    <li className="task" key={id}>
      <span className={`task-desc ${completed ? "task-completed" : ""}`}>
        {desc}
      </span>
      <button className="task-delete" onClick={() => handleCompletion(id)}>
        complete
      </button>
      <button className="task-delete" onClick={() => handleDelete(id)}>
        delete
      </button>
    </li>
  );
};

export default Task;
