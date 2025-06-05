// src/hooks/forms/useSubmitInsuranceForm.ts
import { useMutation } from "@tanstack/react-query";
import { APISubmitInsuranceForm } from "../../axios/home/apis";
import { apiRoutes } from "@/atomic/apiRoutes";

export const useSubmitInsuranceForm = () => {
  return useMutation({
    mutationKey: [apiRoutes.home.postForm],
    mutationFn: async (formData: any) => {
      return await APISubmitInsuranceForm(formData);
    },
  });
};
