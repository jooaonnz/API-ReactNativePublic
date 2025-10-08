import api from "../../../api/api";

export async function getCambio() {
  try {
    const response = await api.get("/USD");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados: ", error);
    throw error;
  }
}
