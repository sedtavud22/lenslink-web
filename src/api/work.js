import axios from "../config/axios";

export const createWork = (formData) => axios.post("/works", formData);

export const getAllWorks = () => axios.get("/works");
