import { createContext, useEffect, useState } from "react";
import * as requestApi from "../../../api/request";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { REQUEST_STATUS } from "../../../constants";

export const RequestContext = createContext();

export default function RequestContextProvider({ children }) {
  const [userRequests, setUserRequests] = useState([]);
  const [completedUserRequests, setCompletedUserRequests] = useState([]);
  const [requestInfo, setRequestInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { userId, requestId } = useParams();

  useEffect(() => {
    const fetchUserRequests = async () => {
      try {
        setLoading(true);
        const res = await requestApi.getRequestsByUserId(userId);
        setUserRequests(
          res.data.requests.filter(
            (request) => request.status !== REQUEST_STATUS.Completed
          )
        );
        setCompletedUserRequests(
          res.data.requests.filter(
            (request) => request.status === REQUEST_STATUS.Completed
          )
        );
      } catch (error) {
        toast.error(error.response?.data.message);
      } finally {
        setLoading(false);
      }
    };
    if (userId) {
      fetchUserRequests();
    }
  }, [userId]);

  useEffect(() => {
    const fetchRequestInfo = async () => {
      try {
        setLoading(true);
        const res = await requestApi.getRequestByRequestId(requestId);
        setRequestInfo(res.data.request);
      } catch (error) {
        toast.error(error.response?.data.message);
      } finally {
        setLoading(false);
      }
    };
    if (requestId) {
      fetchRequestInfo();
    }
  }, [requestId]);

  return (
    <RequestContext.Provider
      value={{ userRequests, requestInfo, completedUserRequests, loading }}
    >
      {children}
    </RequestContext.Provider>
  );
}
