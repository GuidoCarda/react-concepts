import React, { useState } from "react";
import useList from "../hooks/useList";

const TodoList = () => {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim().length === 0) return;
    tasks.push(newTask);
    setNewTask("");
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>Task list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button>submit task</button>
      </form>

      <div>
        {!tasks.isEmpty() ? (
          <ul>
            {tasks.value.map((task, index) => {
              return (
                <>
                  <li key={index}>{task}</li>;
                  <input
                    type="checkbox"
                    onClick={() => tasks.remove(index)}
                    checked={false}
                  />
                </>
              );
            })}
          </ul>
        ) : (
          <h1>No hay tareas</h1>
        )}
      </div>
    </div>
  );
};

export default TodoList;
