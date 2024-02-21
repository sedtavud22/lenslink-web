import { createContext, useEffect, useState } from "react";
import * as workApi from "../../../api/work";

export const WorkContext = createContext();

export default function WorkContextProvider({ children }) {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    workApi
      .getAllWorks()
      .then((res) => setWorks(res.data.works))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const createWork = async (formData) => {
    const res = await workApi.createWork(formData);
    setWorks((prev) => [res.data.work, ...prev]);
  };

  const updateWork = async (formData, workId) => {
    const res = await workApi.updateWork(formData, workId);
    const newWorks = [
      res.data.work,
      ...works.filter((work) => work.id !== res.data.work.id),
    ];
    setWorks(newWorks);
  };

  const deleteWork = async (workId) => {
    const res = await workApi.deleteWork(workId);
    setWorks(res.data.works);
  };

  return (
    <WorkContext.Provider
      value={{
        works,
        loading,
        createWork,
        updateWork,
        deleteWork,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
}
