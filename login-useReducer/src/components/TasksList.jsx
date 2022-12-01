import React, { useContext } from "react";
import tasksContext from "../context/tasksContext";

const TasksList = () => {
  const { state, ACTIONS, dispatch } = useContext(tasksContext);

  const { tasks } = state;

  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };

  const handleCompletion = (id) => {
    const task = tasks.find((task) => task.id === id);

    const completedTask = {
      ...task,
      completed: true,
    };

    dispatch({
      type: ACTIONS.COMPLETION,
      payload: completedTask,
    });
  };

  return (
    <ul className="task-list">
      {tasks.length !== 0 ? (
        tasks.map(({ task, id, completed }) => (
          <li className="task" key={id}>
            <span className={`task-desc ${completed ? "task-completed" : ""}`}>
              {task}
            </span>
            <button
              className="task-delete"
              onClick={() => handleCompletion(id)}
            >
              complete
            </button>
            <button className="task-delete" onClick={() => handleDelete(id)}>
              delete
            </button>
          </li>
        ))
      ) : (
        <h3>There are no tasks available</h3>
      )}
    </ul>
  );
};

export default TasksList;
