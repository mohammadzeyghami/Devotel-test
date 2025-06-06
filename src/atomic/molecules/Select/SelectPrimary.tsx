import { motion, AnimatePresence } from "framer-motion";
import { Controller, useFormState } from "react-hook-form";
import { useDynamicOptions } from "@/atomic/services/customTanstackHooks/useDynamicOptions/useDynamicOptions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import { useTranslation } from "react-i18next";
import { Label } from "../Label/Label";

interface SelectPrimaryProps {
  name: string;
  label?: string;
  control: any;
  required?: boolean;
  options?: { label: string; value: string }[];
  dynamicOptions?: {
    endpoint: string;
    dependsOn: string;
  };
  dependsOnValue?: string;
  watch?: any;
}

const SelectPrimary = ({
  name,
  label,
  control,
  required = false,
  options = [],
  dynamicOptions,
  watch,
}: SelectPrimaryProps) => {
  const { t } = useTranslation();
  const isDynamic = !!dynamicOptions;
  const dependsOnValue = watch?.(dynamicOptions?.dependsOn || "");

  const { errors } = useFormState({ control });

  const { data = [], isLoading } = useDynamicOptions({
    enabled: isDynamic && !!dependsOnValue,
    endpoint: dynamicOptions?.endpoint || "",
    dependsOnKey: dynamicOptions?.dependsOn || "",
    dependsOnValue: dependsOnValue || "",
    fieldId: name,
  });

  const allOptions = isDynamic
    ? Array.isArray(data)
      ? data.map((opt: string) => ({ label: opt, value: opt }))
      : // @ts-ignore
      Array.isArray(data?.states)
      ? // @ts-ignore
        data.states.map((opt: string) => ({ label: opt, value: opt }))
      : []
    : (options || []).map((opt: any) =>
        typeof opt === "string" ? { label: opt, value: opt } : opt
      );

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <Label required={required} className="mb-1 font-medium">
          {label}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? t("form_errors.required") : false,
        }}
        render={({ field }) => (
          <>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={
                    isLoading
                      ? t("form_placeholders.loading")
                      : t("form_placeholders.select")
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {allOptions.map((opt: { value: string; label: string }) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <AnimatePresence>
              {errors[name] && (
                <motion.p
                  className="mt-1 text-sm text-red-500"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {errors[name]?.message as string}
                </motion.p>
              )}
            </AnimatePresence>
          </>
        )}
      />
    </div>
  );
};

export default SelectPrimary;
