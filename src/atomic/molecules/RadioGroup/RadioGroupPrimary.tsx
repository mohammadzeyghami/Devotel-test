import { Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Label } from "../Label/Label";

interface RadioGroupPrimaryProps {
  name: string;
  label?: string;
  control: any;
  required?: boolean;
  options: { label: string; value: string }[];
}

const RadioGroupPrimary = ({
  name,
  label,
  control,
  required = false,
  options,
}: RadioGroupPrimaryProps) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {label && <p className="mb-1 font-medium">{label}</p>}

      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className="flex flex-col gap-2"
          >
            {options.map((opt) => (
              <div key={opt.value} className="flex items-center gap-2">
                <RadioGroupItem value={opt.value} id={opt.value} />
                <Label htmlFor={opt.value}>{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
    </div>
  );
};

export default RadioGroupPrimary;
