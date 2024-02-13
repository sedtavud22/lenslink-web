import { createContext, useEffect, useState } from "react";
import { clearToken, getToken, storeToken } from "../../../utils/local-storage";

import * as authApi from "../../../api/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchMe()
        .then((res) => setAuthUser(res.data.user))
        .catch((err) => toast.error(err.response?.data.message))
        .finally(setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  const registerUser = async (user) => {
    await authApi.register(user);
  };

  const login = async (credentials) => {
    const res = await authApi.login(credentials);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };

  const logout = async () => {
    setAuthUser(null);
    clearToken();
  };

  return (
    <AuthContext.Provider
      value={{ registerUser, login, logout, authUser, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
