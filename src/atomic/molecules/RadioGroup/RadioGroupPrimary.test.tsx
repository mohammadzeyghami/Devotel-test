import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm, FormProvider } from "react-hook-form";
import RadioGroupPrimary from "./RadioGroupPrimary";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];

const WrapperWithRadioGroup = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  const methods = useForm({
    defaultValues: { [name]: "" },
  });

  return (
    <FormProvider {...methods}>
      <RadioGroupPrimary
        name={name}
        label={label}
        control={methods.control}
        options={options}
      />
    </FormProvider>
  );
};

describe("RadioGroupPrimary", () => {
  it("renders label and radio options", () => {
    render(<WrapperWithRadioGroup name="radio" label="Select an option" />);
    expect(screen.getByText("Select an option")).toBeInTheDocument();
    expect(screen.getByLabelText("Option A")).toBeInTheDocument();
    expect(screen.getByLabelText("Option B")).toBeInTheDocument();
  });

  it("selects a radio option", async () => {
    const user = userEvent.setup();
    render(<WrapperWithRadioGroup name="radio" label="Choose one" />);
    const radioA = screen.getByLabelText("Option A");
    await user.click(radioA);
    expect(radioA).toBeChecked();
  });
});
