// src/hooks/forms/useFetchInsuranceForm.ts
import { apiRoutes } from "@/atomic/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { APIGetSubmissions } from "../../axios/formsSubmissions/apiGetSubmissions";

export const useGetSubmissions = () => {
  return useQuery({
    queryKey: [apiRoutes.home.getSubmissions],
    queryFn: APIGetSubmissions,
  });
};
