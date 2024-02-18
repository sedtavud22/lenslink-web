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

  const cancelRequest = async (workId) => {
    try {
      setLoading(true);
      const res = await requestApi.cancelRequest(workId);
      const newUserRequests = [
        res.data.request,
        ...userRequests.filter(
          (request) =>
            !(
              request.workId === +workId &&
              request.status === REQUEST_STATUS.Pending
            )
        ),
      ];

      setUserRequests(newUserRequests);
      if (requestId) {
        setRequestInfo(res.data.request);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  const completeRequest = async (workId) => {
    try {
      setLoading(true);
      const res = await requestApi.completeRequest(workId);
      const newUserRequests = userRequests.filter(
        (request) =>
          !(
            request.workId === +workId &&
            request.status === REQUEST_STATUS.Ongoing
          )
      );
      setUserRequests(newUserRequests);
      setCompletedUserRequests((prev) => [res.data.request, ...prev]);
      if (requestId) {
        setRequestInfo(res.data.request);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  const acceptRequest = async (workId) => {
    try {
      setLoading(true);
      const res = await requestApi.acceptRequest(workId);
      const newUserRequests = [
        res.data.request,
        ...userRequests.filter(
          (request) =>
            !(
              request.workId === +workId &&
              request.status === REQUEST_STATUS.Pending
            )
        ),
      ];
      setUserRequests(newUserRequests);
      setCompletedUserRequests((prev) => [res.data.request, ...prev]);
      if (requestId) {
        setRequestInfo(res.data.request);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  const rejectRequest = async (workId) => {
    try {
      setLoading(true);
      const res = await requestApi.rejectRequest(workId);
      const newUserRequests = [
        res.data.request,
        ...userRequests.filter(
          (request) =>
            !(
              request.workId === +workId &&
              request.status === REQUEST_STATUS.Pending
            )
        ),
      ];
      setUserRequests(newUserRequests);
      setCompletedUserRequests((prev) => [res.data.request, ...prev]);
      if (requestId) {
        setRequestInfo(res.data.request);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RequestContext.Provider
      value={{
        userRequests,
        requestInfo,
        completedUserRequests,
        loading,
        cancelRequest,
        completeRequest,
        acceptRequest,
        rejectRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
