// src/pages/HomePage.test.tsx
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as useGetSubmissionsHook from "@/atomic/services/customTanstackHooks/useGetSubmissions/useGetSubmissions";
import type { InsuranceRow } from "@/atomic/services/axios/formsSubmissions/interface";
import HomePage from "./Home";

// mock PrimaryTable component to isolate test
vi.mock("@/atomic/molecules/Table/TablePrimary", () => ({
  default: ({ columns, data, isLoading }: any) => (
    <div data-testid="primary-table">
      <div>Columns: {columns.join(", ")}</div>
      <div>Rows: {data.length}</div>
      <div>{isLoading ? "Loading..." : "Loaded"}</div>
    </div>
  ),
}));

describe("HomePage", () => {
  it("should render PrimaryTable with submissions data", () => {
    const mockData = {
      columns: ["Full Name", "Age", "Gender", "Insurance Type", "City"],
      data: [
        {
          id: "1",
          "Full Name": "Jane Smith",
          Age: 32,
          Gender: "Female",
          "Insurance Type": "Home",
          City: "Los Angeles",
        },
      ] as InsuranceRow[],
    };

    vi.spyOn(useGetSubmissionsHook, "useGetSubmissions").mockReturnValue({
      data: mockData,
      isLoading: false,
    } as any);

    render(<HomePage />);

    expect(screen.getByTestId("primary-table")).toBeInTheDocument();
    expect(screen.getByText(/Columns:/)).toHaveTextContent(
      "Full Name, Age, Gender, Insurance Type, City"
    );
    expect(screen.getByText(/Rows:/)).toHaveTextContent("1");
    expect(screen.getByText(/Loaded/)).toBeInTheDocument();
  });
});
