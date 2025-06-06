import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it, vi } from "vitest";
import { useGetSubmissions } from "./useGetSubmissions";

// 👇 دقیقاً این رو استفاده کن، نه axios/api
import * as submissionsApi from "../../axios/formsSubmissions/apiGetSubmissions";

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useGetSubmissions", () => {
  it("should fetch and return submissions data", async () => {
    const mockData = {
      columns: ["Full Name", "Age", "Gender", "Insurance Type", "City"],
      data: [
        {
          id: "1",
          "Full Name": "John Doe",
          Age: 28,
          Gender: "Male",
          "Insurance Type": "Health",
          City: "New York",
        },
      ],
    };

    // ✅ درست‌ترین شکل mock
    vi.spyOn(submissionsApi, "APIGetSubmissions").mockResolvedValue(mockData);

    const { result } = renderHook(() => useGetSubmissions(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(mockData);
  });
});
