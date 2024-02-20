import axios from "../config/axios";

export const getUserByUserId = (userId) => axios.get(`/users/${userId}`);

export const updateUser = (formData) => axios.patch("/users", formData);
