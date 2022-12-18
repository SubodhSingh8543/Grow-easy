import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true);
  const [token1 ,setToken] = useState(null);

  const login = (val) => {
    setIsAuth(true);
    setToken(val);
  };

  const logout = () => {
    setIsAuth(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout ,token1}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
