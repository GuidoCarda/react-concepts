import { useAuth } from "../context/AuthContext";

function TestComponent() {
  const { username, password } = useAuth();

  return (
    <div>
      <p>{username}</p>
      <p>{password}</p>
    </div>
  );
}

export default TestComponent;
