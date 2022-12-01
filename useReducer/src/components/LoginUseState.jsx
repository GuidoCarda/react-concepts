import React, { useState } from "react";

const LoginUseState = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      function login(username, password) {
        console.log(username, password);
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
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error) {
      setError("Credenciales invalidas");
      setIsLoading(false);
    }

    setUsername("");
    setPassword("");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsLoading(false);
    setError("");
  };

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading...</h1>
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
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default LoginUseState;
