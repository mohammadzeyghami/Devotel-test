import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "@/atomic/apiRoutes";
import type { FormDefinition } from "./interface";
import { APIFetchInsuranceForm } from "../../axios/home/apis";

export const useFetchInsuranceForm = () =>
  useQuery<FormDefinition[]>({
    queryKey: [apiRoutes.home.getForm],
    queryFn: APIFetchInsuranceForm,
  });
