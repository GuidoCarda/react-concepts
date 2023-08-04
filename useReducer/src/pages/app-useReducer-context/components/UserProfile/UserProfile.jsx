import { useAuth } from "../../context/AuthContext";
import classes from "./UserProfile.module.css";

function UserProfile() {
  const { username } = useAuth();
  return (
    <div className={classes.container}>
      <h1>Welcome: {username}</h1>
      <p>You've been logged in successfuly</p>
    </div>
  );
}

export default UserProfile;
