import React, { useContext } from "react";
import tasksContext from "../context/tasksContext";

const taskInput = () => {
  const { state, dispatch, ACTIONS } = useContext(tasksContext);

  const { input } = state;

  const submit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    dispatch({ type: ACTIONS.CREATE, payload: input });
    dispatch({ type: ACTIONS.CLEAR });
  };

  return (
    <form className="task-form" onSubmit={submit}>
      <label htmlFor="note">Task:</label>
      <div>
        <input
          className="task-input"
          type="text"
          name="task"
          value={input}
          onChange={(e) =>
            dispatch({ type: ACTIONS.INPUT, payload: e.currentTarget.value })
          }
        />
        <button className="task-new-btn">Create task</button>
      </div>
    </form>
  );
};

export default taskInput;
