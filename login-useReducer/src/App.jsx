import React, { useReducer } from "react";
import "./App.css";
import tasksContext from "./context/tasksContext";
import TaskInput from "./components/TaskInput";
import TasksList from "./components/TasksList";

const ACTIONS = {
  FILTER: "FILTER",
  INPUT: "INPUT",
  CREATE: "CREATE",
  DELETE: "DELETE",
  COMPLETION: "COMPLETION",
};

const initialState = {
  input: "",
  tasks: [],
  filteredTasks: [],
};

const generateId = () => {
  return Math.floor(Math.random() * (1000 - 0 + 1));
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case ACTIONS.CREATE:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { task: state.input, id: generateId(), completed: false },
        ],
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case ACTIONS.CLEAR:
      return {
        ...state,
        input: "",
      };
    case ACTIONS.FILTER:
      return {
        ...state,
        filteredTasks: state.tasks.filter((task) => task.id === action.payload),
      };
    case ACTIONS.COMPLETION:
      console.log("entro");
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.payload.id),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <tasksContext.Provider value={{ state, dispatch, ACTIONS }}>
      <div className="container">
        <TaskInput />
        {state.tasks.length !== 0 ? (
          <button className="task-filter">Filtrar</button>
        ) : null}
        <TasksList />
      </div>
    </tasksContext.Provider>
  );
}

export default App;
