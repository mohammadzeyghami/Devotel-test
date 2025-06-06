// src/components/Checkbox/CheckboxPrimary.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CheckboxPrimary from "./CheckboxPrimary";
import { useForm, FormProvider } from "react-hook-form";

// mock i18n
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// mock Checkbox component
vi.mock("./Checkbox", () => ({
  Checkbox: ({ checked, onCheckedChange, id }: any) => (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      data-testid="checkbox"
    />
  ),
}));

describe("CheckboxPrimary", () => {
  it("renders with label and toggles correctly", () => {
    const Wrapper = () => {
      const methods = useForm({ defaultValues: { agree: false } });
      return (
        <FormProvider {...methods}>
          <CheckboxPrimary
            name="agree"
            label="Accept terms"
            control={methods.control}
          />
        </FormProvider>
      );
    };

    render(<Wrapper />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();

    const checkbox = screen.getByTestId("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it("shows required error if not checked and form is submitted", async () => {
    const Wrapper = () => {
      const methods = useForm({
        mode: "onSubmit",
        defaultValues: { agree: false },
      });
      return (
        <form onSubmit={methods.handleSubmit(() => {})}>
          <CheckboxPrimary
            name="agree"
            label="Accept terms"
            control={methods.control}
            required
          />
          <button type="submit">Submit</button>
        </form>
      );
    };

    render(<Wrapper />);
    fireEvent.click(screen.getByText("Submit"));

    expect(await screen.findByText("form_errors.required")).toBeInTheDocument();
  });
});
