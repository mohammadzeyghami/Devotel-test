import { apiRoutes } from "@/atomic/apiRoutes";
import { api } from "@/lib/axios";

export const APIGetSubmissions = async () => {
  const response = await api.get(apiRoutes.home.getSubmissions);
  return response.data;
};
