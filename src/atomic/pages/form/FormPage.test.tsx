// src/pages/FormPage.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as insuranceHook from "@/atomic/services/customTanstackHooks/useFetchInsuranceForm/useFetchInsuranceForm";
import FormPage from "./Form";

// mock i18n translation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// mock DynamicForm to isolate logic
vi.mock("@/atomic/sections/sections/DynamicForm/DynamicForm", () => ({
  DynamicForm: vi.fn(() => (
    <div data-testid="dynamic-form">Mocked DynamicForm</div>
  )),
}));

describe("FormPage", () => {
  it("should render form buttons and then show DynamicForm after click", () => {
    const mockForms = [
      {
        formId: "health_insurance_application",
        title: "Health Insurance Application",
        fields: [],
      },
      {
        formId: "car_insurance_application",
        title: "Car Insurance Application",
        fields: [],
      },
    ];

    vi.spyOn(insuranceHook, "useFetchInsuranceForm").mockReturnValue({
      data: mockForms,
      isLoading: false,
      isError: false,
    } as any);

    render(<FormPage />);

    // expect form buttons to be rendered
    expect(
      screen.getByText("forms.health_insurance_application")
    ).toBeInTheDocument();
    expect(
      screen.getByText("forms.car_insurance_application")
    ).toBeInTheDocument();

    // simulate clicking on one of the form buttons
    fireEvent.click(screen.getByText("forms.health_insurance_application"));

    // expect DynamicForm to be shown
    expect(screen.getByTestId("dynamic-form")).toBeInTheDocument();
  });

  it("should show loading state", () => {
    vi.spyOn(insuranceHook, "useFetchInsuranceForm").mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as any);

    render(<FormPage />);
    expect(screen.getByText("loading")).toBeInTheDocument();
  });

  it("should show error state", () => {
    vi.spyOn(insuranceHook, "useFetchInsuranceForm").mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);

    render(<FormPage />);
    expect(screen.getByText("error_loading_forms")).toBeInTheDocument();
  });
});
