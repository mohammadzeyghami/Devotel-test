import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "@/atomic/apiRoutes";
import { APIGetSubmissions } from "../../axios/formsSubmissions/apiGetSubmissions";
import type { SubmissionResponse } from "../../axios/formsSubmissions/interface";
export const useGetSubmissions = () => {
  return useQuery<SubmissionResponse>({
    queryKey: [apiRoutes.home.getSubmissions],
    queryFn: APIGetSubmissions,
  });
};
