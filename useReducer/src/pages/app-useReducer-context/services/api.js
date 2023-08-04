const api = {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          username.toLowerCase() === "admin" &&
          password.toLowerCase() === "1234"
        ) {
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  },
};

export default api;
