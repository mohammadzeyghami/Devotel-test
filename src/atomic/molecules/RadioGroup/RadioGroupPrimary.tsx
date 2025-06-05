import { Controller, useFormState } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Label } from "../Label/Label";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const { errors } = useFormState({ control });

  return (
    <div className="flex flex-col gap-2 mb-4">
      {label && <Label className="mb-1 font-medium">{label}</Label>}

      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-2"
            >
              {options.map((opt) => (
                <div key={opt.value} className="flex items-center gap-2">
                  <RadioGroupItem
                    value={opt.value}
                    id={`${name}-${opt.value}`}
                  />
                  <Label htmlFor={`${name}-${opt.value}`}>{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>

            <AnimatePresence>
              {errors[name] && (
                <motion.p
                  className="mt-1 text-sm text-red-500"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {(errors[name]?.message as string) ||
                    t("form_errors.required")}
                </motion.p>
              )}
            </AnimatePresence>
          </>
        )}
      />
    </div>
  );
};

export default RadioGroupPrimary;
