// src/hooks/forms/useSubmitInsuranceForm.test.tsx
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it, vi } from "vitest";
import { useSubmitInsuranceForm } from "./useSubmitInsuranceForm";
import * as formApi from "../../axios/home/apis";

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useSubmitInsuranceForm", () => {
  it("should successfully submit form data", async () => {
    const mockFormData = {
      formId: "health_insurance_application",
      formData: {
        first_name: "John",
        last_name: "Doe",
      },
    };

    const mockResponse = { success: true, message: "Form submitted" };

    vi.spyOn(formApi, "APISubmitInsuranceForm").mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useSubmitInsuranceForm(), {
      wrapper: createWrapper(),
    });

    result.current.mutate(mockFormData);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(mockResponse);
  });
});
