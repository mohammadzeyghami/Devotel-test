import { Controller, useFormState } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "./Checkbox";
import { Label } from "../Label/Label";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const { errors } = useFormState({ control });

  return (
    <div
      className={`flex flex-col justify-center ${className ?? ""}`}
      data-slot="provider"
    >
      <div className="flex items-center space-x-2">
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
        <Label required={required} htmlFor={name}>
          {label}
        </Label>
      </div>

      <AnimatePresence>
        {errors[name] && (
          <motion.p
            className="mt-1 text-sm text-red-500"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {(errors[name]?.message as string) || t("form_errors.required")}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CheckboxPrimary;
