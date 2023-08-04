import { createContext, useContext, useReducer } from "react";

const initialState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
};

//Actions
export const AUTH_ACTIONS = {
  FIELD: "FIELD",
  LOGIN: "LOGIN",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOGOUT: "LOGOUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.FIELD: {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    }
    case AUTH_ACTIONS.LOGIN: {
      console.log(action.type);
      return { ...state, isLoading: true, error: "" };
    }
    case AUTH_ACTIONS.SUCCESS: {
      console.log(action.type);
      return { ...state, isLoading: false, isLoggedIn: true, error: "" };
    }
    case AUTH_ACTIONS.ERROR: {
      console.log(action.type);
      return { ...state, isLoading: false, error: action.payload };
    }
    case AUTH_ACTIONS.LOGOUT: {
      console.log(action.type);
      return { ...initialState };
    }
    default:
      return state;
  }
};

const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
