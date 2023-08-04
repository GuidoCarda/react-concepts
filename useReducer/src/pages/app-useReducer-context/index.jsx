import Container from "./components/Container/Container";

import { AuthProvider } from "./context/AuthContext";

const AppUseReducerContext = () => {
  return (
    <AuthProvider>
      <Container />
    </AuthProvider>
  );
};

export default AppUseReducerContext;
