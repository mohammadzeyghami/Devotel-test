import { apiRoutes } from "@/atomic/apiRoutes";
import { api } from "@/lib/axios";

export const APISubmitInsuranceForm = async (formData: any) => {
  const response = await api.post(apiRoutes.home.postForm, formData);
  return response.data;
};

export const APIFetchInsuranceForm = async () => {
  const response = await api.get(apiRoutes.home.getForm);
  return response.data;
};
