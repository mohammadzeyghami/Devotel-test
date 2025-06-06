// src/atomic/services/customTanstackHooks/useFetchInsuranceForm/useFetchInsuranceForm.test.tsx
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it, vi } from "vitest";
import { useFetchInsuranceForm } from "./useFetchInsuranceForm";
import * as insuranceApi from "../../axios/home/apis";

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useFetchInsuranceForm", () => {
  it("should fetch and return form definitions", async () => {
    const mockData = [
      {
        formId: "health_insurance_application",
        title: "Health Insurance Application",
        fields: [
          {
            id: "first_name",
            label: "First Name",
            type: "text",
            required: true,
          },
        ],
      },
    ];

    vi.spyOn(insuranceApi, "APIFetchInsuranceForm").mockResolvedValue(mockData);

    const { result } = renderHook(() => useFetchInsuranceForm(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(mockData);
  });
});
