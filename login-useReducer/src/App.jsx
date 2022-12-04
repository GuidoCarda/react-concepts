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
  filtering: false,
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
      console.log("entro al reducer");

      if (action.payload === "filter") {
        return {
          ...state,
          filtering: true,
          filteredTasks: state.tasks.filter((task) => task.completed),
        };
      } else {
        return {
          ...state,
          filtering: false,
          filteredTasks: [],
        };
      }

    case ACTIONS.COMPLETION:
      state.tasks.splice(
        action.payload.taskIndex,
        1,
        action.payload.completedTask
      );

      return {
        ...state,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const handleFilter = () => {
    if (state.filtering && state.filteredTasks.length !== 0) {
      dispatch({ type: ACTIONS.FILTER, payload: "filter" });
    } else {
      dispatch({ type: ACTIONS.FILTER, payload: "clear" });
    }
  };

  console.log(state.filtering, state.filteredTasks);

  return (
    <tasksContext.Provider value={{ state, dispatch, ACTIONS }}>
      <div className="container">
        <TaskInput />
        {state.tasks.length !== 0 ? (
          <div className="filter">
            <p>Filtrar por:</p>
            <button className="filter-btn" onClick={handleFilter}>
              Completadas
            </button>
          </div>
        ) : null}
        <TasksList />
      </div>
    </tasksContext.Provider>
  );
}

export default App;
