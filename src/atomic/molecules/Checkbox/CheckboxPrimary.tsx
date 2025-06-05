import { Controller } from "react-hook-form";
import { Checkbox } from "./Checkbox";
import { Label } from "../Label/Label";

interface CheckboxPrimaryProps {
  name: string;
  label: string;
  control: any;
  required?: boolean;
  className?: string;
  [key: string]: any;
}

const CheckboxPrimary = ({
  name,
  label,
  control,
  required = false,
  className,
  ...rest
}: CheckboxPrimaryProps) => {
  return (
    <div
      className={`flex items-center space-x-2 mb-4 ${className ?? ""}`}
      data-slot="provider"
    >
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Checkbox
            checked={field.value || false}
            onCheckedChange={field.onChange}
            id={name}
            {...rest}
          />
        )}
      />
      <Label htmlFor={name}>{label}</Label>
    </div>
  );
};

export default CheckboxPrimary;
