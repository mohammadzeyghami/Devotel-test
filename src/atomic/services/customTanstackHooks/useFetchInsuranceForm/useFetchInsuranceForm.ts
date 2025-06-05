// src/hooks/forms/useFetchInsuranceForm.ts
import { apiRoutes } from "@/atomic/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { APIFetchInsuranceForm } from "../../axios/home/apis";

export const useFetchInsuranceForm = () => {
  return useQuery({
    queryKey: [apiRoutes.home.getForm],
    queryFn: APIFetchInsuranceForm,
  });
};
