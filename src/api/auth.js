import axios from "../config/axios";
import { getToken } from "../utils/local-storage";

export const register = (user) => axios.post("/auth/register", user);

export const login = (credentials) => axios.post("/auth/login", credentials);

export const fetchMe = () =>
  axios.get("/auth/me", { headers: { Authorization: `Bearer ${getToken()}` } });
