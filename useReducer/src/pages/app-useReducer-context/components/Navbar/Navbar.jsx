import {
  AUTH_ACTIONS,
  useAuth,
  useAuthDispatch,
} from "../../context/AuthContext";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };

  return (
    <nav className={classes.container}>
      <span>logo</span>
      {isLoggedIn && (
        <button className={classes.logOutBtn} onClick={handleLogout}>
          log out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
