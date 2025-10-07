import axios from "axios";

//Resquest de dolar USD
const api = axios.create({
  baseURL: "sua api",
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na API:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
