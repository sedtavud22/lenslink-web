import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as workApi from "../../../api/work";
import * as requestApi from "../../../api/request";
import { toast } from "react-toastify";
import { REQUEST_STATUS } from "../../../constants";

export const WorkInfoContext = createContext();

export default function WorkInfoContextProvider({ children }) {
  const [workInfo, setWorkInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { workId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkInfo = async () => {
      try {
        const res = await workApi.getWorkById(workId);
        setWorkInfo(res.data.work);
      } catch (error) {
        toast.error(error.response?.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkInfo();
  }, [workId]);

  const sendRequest = async (data) => {
    try {
      const res = await requestApi.sendRequest(data, workId);
      const newWorkRequests = workInfo.workRequests.push(res.data.request);
      setWorkInfo((prev) => ({ ...prev, workRequests: newWorkRequests }));
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  const cancelRequest = async () => {
    try {
      const res = await requestApi.cancelRequest(workId);
      const newWorkRequests = workInfo.workRequests
        .filter(
          (request) =>
            !(
              request.workId === +workId &&
              request.status === REQUEST_STATUS.Pending
            )
        )
        .push(res.data.request);
      setWorkInfo((prev) => ({ ...prev, workRequests: newWorkRequests }));
      navigate("/work");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <WorkInfoContext.Provider
      value={{ workInfo, loading, sendRequest, cancelRequest }}
    >
      {children}
    </WorkInfoContext.Provider>
  );
}
