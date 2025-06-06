import { api } from "@/lib/axios";
import { apiRoutes } from "@/atomic/apiRoutes";
import type { SubmissionResponse } from "./interface";

export const APIGetSubmissions = async (): Promise<SubmissionResponse> => {
  const response = await api.get<SubmissionResponse>(
    apiRoutes.home.getSubmissions
  );
  return response.data;
};
