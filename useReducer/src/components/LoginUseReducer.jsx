import React, { useReducer } from "react";

//Actions
const FIELD = "FIELD";
const LOGIN = "LOGIN";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";
const LOGOUT = "LOGOUT";

const initialState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
};

//Reducer
const loginReducer = (state, action) => {
  switch (action.type) {
    case FIELD:
      return {
        ...state,
        [action.fieldname]: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: true,
      };
    case ERROR:
      return {
        ...state,
        error: "Invalid username or password",
        username: "",
        password: "",
        isLoading: false,
        isLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const LoginUseReducer = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, error, isLoading, isLoggedIn } = state;

  console.log(state);

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const submit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN });
    try {
      function login(username, password) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (
              username.toLowerCase() === "admin" &&
              password.toLowerCase() === "admin"
            ) {
              resolve();
            } else {
              reject();
            }
          }, 2000);
        });
      }

      await login(username, password);
      dispatch({ type: SUCCESS });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : isLoggedIn ? (
        <div>
          <h1>Bienvenido {username}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <form onSubmit={submit}>
            <label htmlFor="user">User</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: FIELD,
                  fieldname: "username",
                  payload: e.currentTarget.value,
                })
              }
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: FIELD,
                  fieldname: "password",
                  payload: e.currentTarget.value,
                })
              }
            />
            <button>Login</button>
          </form>
          {error ? <span className="login-error">{error}</span> : null}
        </div>
      )}
      {}
    </div>
  );
};

export default LoginUseReducer;
