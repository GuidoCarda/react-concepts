import { useAuth } from "../../context/AuthContext";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar";
import UserProfile from "../UserProfile/UserProfile";
import classes from "./Container.module.css";

const Container = () => {
  const { isLoading, isLoggedIn, usernmame } = useAuth();

  return (
    <>
      <Navbar />
      <div className={classes.wrapper}>
        {isLoading ? (
          <div className={classes.loading}>
            <h2>loading...</h2>
          </div>
        ) : isLoggedIn ? (
          <UserProfile />
        ) : (
          <LoginForm />
        )}
      </div>
    </>
  );
};

export default Container;
