import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { useForm, FormProvider } from "react-hook-form";
import InputPrimary from "./InputPrimary";

describe("InputPrimary", () => {
  const Wrapper = ({ name, label }: { name: string; label: string }) => {
    const methods = useForm({ defaultValues: { [name]: "" } });
    return (
      <FormProvider {...methods}>
        <InputPrimary
          name={name}
          label={label}
          control={methods.control}
          placeholder={`Enter ${label}`}
        />
      </FormProvider>
    );
  };

  it("renders label correctly when provided", () => {
    render(<Wrapper name="firstName" label="First Name" />);
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
  });

  it("updates the value correctly", async () => {
    const user = userEvent.setup();
    render(<Wrapper name="username" label="Username" />);
    const input = screen.getByPlaceholderText("Enter Username");
    await user.type(input, "hamed");
    expect(input).toHaveValue("hamed");
  });
});
