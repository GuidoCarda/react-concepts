import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";

let nextId = 0;

const Flushsync = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    const newTodo = { id: nextId++, todo: input };

    flushSync(() => {
      setTodoList([...todoList, newTodo]);
      setInput("");
    });
    listRef.current.lastChild.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
    });
  };

  console.log(todoList.length);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button>submit</button>
      </form>
      {todoList.length !== 0 ? (
        <ul className="todo-list" ref={listRef}>
          {todoList.map((item) => (
            <li key={item.id}>{item.todo}</li>
          ))}
        </ul>
      ) : (
        <h1>Empty todo list</h1>
      )}
    </div>
  );
};

export default Flushsync;
