// src/atomic/services/customTanstackHooks/useDynamicOptions/useDynamicOptions.ts

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface DynamicOptionsResponse {
  country: string;
  states: string[];
}

interface UseDynamicOptionsProps {
  endpoint: string;
  dependsOnKey: string;
  dependsOnValue: string;
  fieldId: string;
  enabled?: boolean;
}

export const useDynamicOptions = ({
  endpoint,
  dependsOnKey,
  dependsOnValue,
  enabled = false,
  fieldId,
}: UseDynamicOptionsProps) => {
  return useQuery<string[]>({
    queryKey: ["dynamicOptions", fieldId, endpoint, dependsOnValue],
    enabled: enabled && !!dependsOnValue,
    queryFn: async () => {
      const url = `${endpoint}?${dependsOnKey}=${dependsOnValue}`;
      const res = await api.get<DynamicOptionsResponse>(url);

      if (!res.data?.states || !Array.isArray(res.data.states)) {
        throw new Error(
          "Invalid response format: 'states' key missing or invalid"
        );
      }

      return res.data.states;
    },
  });
};
