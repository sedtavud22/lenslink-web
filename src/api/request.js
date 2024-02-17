import axios from "../config/axios";

export const sendRequest = (data, workId) =>
  axios.post(`/requests/works/${workId}`, data);

export const acceptRequest = (workId) =>
  axios.patch(`/requests/works/${workId}/accept`);

export const rejectRequest = (workId) =>
  axios.patch(`/requests/works/${workId}/reject`);

export const cancelRequest = (workId) =>
  axios.patch(`/requests/works/${workId}/cancel`);

export const completeRequest = (workId) =>
  axios.patch(`/requests/works/${workId}/complete`);

export const getRequestsByUserId = (userId) =>
  axios.get(`/requests/user/${userId}`);

export const getRequestByRequestId = (requestId) =>
  axios.get(`/requests/${requestId}`);
