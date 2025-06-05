import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

interface SelectPrimaryProps {
  name: string;
  label?: string;
  control: any;
  required?: boolean;
  options: { label: string; value: string }[];
}

const SelectPrimary = ({
  name,
  label,
  control,
  required = false,
  options,
}: SelectPrimaryProps) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1">{label}</label>}

      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default SelectPrimary;
