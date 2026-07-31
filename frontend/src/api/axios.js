import axios from "axios";

const api = axios.create({
  // Relative by default: works unchanged whether the backend is serving
  // the built frontend itself (prod, same origin) or you're running
  // `npm run dev` in both folders (Vite's dev proxy forwards /api to
  // the backend - see vite.config.js). Override via VITE_API_URL only
  // if your backend lives on a different domain (e.g. split hosting).
  baseURL: import.meta.env.VITE_API_URL || "/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
