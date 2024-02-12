import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const triggerChangeAuthForm = (modalId) => {
    document.getElementById(modalId).close();
    document
      .getElementById(modalId === "login_form" ? "register_form" : "login_form")
      .showModal();
  };

  return (
    <AuthContext.Provider value={{ triggerChangeAuthForm }}>
      {children}
    </AuthContext.Provider>
  );
}
