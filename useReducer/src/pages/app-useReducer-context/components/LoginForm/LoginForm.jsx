import {
  AUTH_ACTIONS,
  useAuth,
  useAuthDispatch,
} from "../../context/AuthContext";
import api from "../../services/api";
import classes from "./LoginForm.module.css";

function LoginForm() {
  const { username, password, isLoading, error } = useAuth();
  const dispatch = useAuthDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: AUTH_ACTIONS.FIELD, payload: { field: id, value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      return dispatch({ type: AUTH_ACTIONS.ERROR, payload: "campos vacios" });
    }

    dispatch({ type: AUTH_ACTIONS.LOGIN });
    try {
      await api.login(username, password);
      dispatch({ type: AUTH_ACTIONS.SUCCESS });
    } catch (err) {
      dispatch({ type: AUTH_ACTIONS.ERROR, payload: "Invalid credentials" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {error && <span className={classes.error}>{error}</span>}

      <h2>Login</h2>
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        onChange={handleInputChange}
        value={username}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        onChange={handleInputChange}
        value={password}
      />
      <button disabled={isLoading}>{isLoading ? "login in" : "Log In"}</button>
    </form>
  );
}

export default LoginForm;
