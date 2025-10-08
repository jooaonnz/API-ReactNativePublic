import axios from "axios";

//Resquest da api, ESSA CHAVE ESTÁ AQUI POR FIM EDUCATIVOS, ESTOU CIENTE QUE NÃO PODE ENVIAR A KEY
const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/73840d85232f19906328540f/latest",
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
