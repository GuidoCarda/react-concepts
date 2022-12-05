import React, { useContext } from "react";
import tasksContext from "../context/tasksContext";
import Task from "./Task";

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
      completed: !task.completed,
    };

    const taskIndex = tasks.map((task) => task.id).indexOf(id);

    if (state.isFiltering) {
      dispatch({
        type: ACTIONS.FILTER,
        payload: "filter",
      });
    }

    dispatch({
      type: ACTIONS.COMPLETION,
      payload: { completedTask, taskIndex },
    });
  };

  if (state.isFiltering) {
    if (state.filteredTasks.length !== 0) {
      return (
        <ul className="task-list">
          {state.filteredTasks.map((task) => (
            <Task
              task={task}
              handleDelete={handleDelete}
              handleCompletion={handleCompletion}
            />
          ))}
        </ul>
      );
    } else {
      return <h2 className="no-results">No hay tareas completadas</h2>;
    }
  }

  return (
    <ul className="task-list">
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <Task
            task={task}
            handleDelete={handleDelete}
            handleCompletion={handleCompletion}
          />
        ))
      ) : (
        <h2 className="no-results">There are no tasks available</h2>
      )}
    </ul>
  );
};

export default TasksList;
