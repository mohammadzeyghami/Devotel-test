import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n"; // مطمئن شو مسیر به درستی به فایل i18n اشاره داره
import PrimaryTable from "./TablePrimary";

// داده تستی
const mockData = [
  {
    id: "1",
    "Full Name": "Ali Rezaei",
    Age: 28,
    Gender: "Male",
    "Insurance Type": "Health",
    City: "Tehran",
  },
  {
    id: "2",
    "Full Name": "Sara Ahmadi",
    Age: 35,
    Gender: "Female",
    "Insurance Type": "Life",
    City: "Shiraz",
  },
];

// رندر با i18n provider
const renderWithProviders = (ui: React.ReactElement) => {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
};

describe("PrimaryTable", () => {
  it("renders table with data", () => {
    renderWithProviders(
      <PrimaryTable columns={["Full Name", "Age", "City"]} data={mockData} />
    );
    expect(screen.getByText("Ali Rezaei")).toBeInTheDocument();
    expect(screen.getByText("Sara Ahmadi")).toBeInTheDocument();
  });

  it("filters data based on search", () => {
    renderWithProviders(
      <PrimaryTable columns={["Full Name", "Age", "City"]} data={mockData} />
    );
    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: "Sara" } });
    expect(screen.getByText("Sara Ahmadi")).toBeInTheDocument();
    expect(screen.queryByText("Ali Rezaei")).not.toBeInTheDocument();
  });

  it("sorts data when header is clicked", () => {
    renderWithProviders(
      <PrimaryTable columns={["Full Name", "Age", "City"]} data={mockData} />
    );

    const fullNameHeader = screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === "th" && content.includes("Full Name")
      );
    });

    // اولین کلیک: نزولی (🔽)
    fireEvent.click(fullNameHeader);
    expect(fullNameHeader).toHaveTextContent("Full Name 🔽");

    // دومین کلیک: صعودی (🔼)
    fireEvent.click(fullNameHeader);
    expect(fullNameHeader).toHaveTextContent("Full Name 🔼");
  });

  it("navigates between pages", () => {
    const bigData = Array.from({ length: 20 }, (_, i) => ({
      id: `${i}`,
      "Full Name": `Person ${i}`,
      Age: 20 + i,
      Gender: "Other",
      "Insurance Type": "Health",
      City: "City",
    }));

    renderWithProviders(
      <PrimaryTable columns={["Full Name", "Age", "City"]} data={bigData} />
    );

    const nextBtn = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextBtn);

    expect(screen.getByText(/page/i)).toHaveTextContent("2");
  });
});
