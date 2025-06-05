// src/atomic/services/customTanstackHooks/useDynamicOptions/useDynamicOptions.ts
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

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
}: UseDynamicOptionsProps) => {
  return useQuery({
    queryKey: ["dynamicOptions", endpoint, dependsOnValue],
    enabled: enabled && !!dependsOnValue,
    queryFn: async () => {
      const url = `${endpoint}?${dependsOnKey}=${dependsOnValue}`;
      const res = await api.get(url);
      // اینجا فرض می‌کنیم داده‌ها در کلید states برمی‌گردند
      return res.data.states ?? [];
    },
  });
};
