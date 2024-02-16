import axios from "../config/axios";

export const createWork = (formData) => axios.post("/works", formData);

export const getAllWorks = () => axios.get("/works");

export const getWorkById = (workId) => axios.get(`/works/${workId}`);

export const deleteWork = (workId) => axios.patch(`/works/${workId}/delete`);
