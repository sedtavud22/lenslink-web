import { createContext, useEffect, useState } from "react";
import * as workApi from "../../../api/work";

export const WorkContext = createContext();

export default function WorkContextProvider({ children }) {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    workApi
      .getAllWorks()
      .then((res) => setWorks(res.data.works))
      .catch((error) => console.log(error));
  }, []);

  const createWork = async (formData) => await workApi.createWork(formData);

  return (
    <WorkContext.Provider value={{ works, createWork }}>
      {children}
    </WorkContext.Provider>
  );
}
