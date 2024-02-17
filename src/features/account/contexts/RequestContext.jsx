import { createContext } from "react";

export const RequestContext = createContext();

export default function RequestContextProvider({ children }) {
  return (
    <RequestContext.Provider value={{}}>{children}</RequestContext.Provider>
  );
}
