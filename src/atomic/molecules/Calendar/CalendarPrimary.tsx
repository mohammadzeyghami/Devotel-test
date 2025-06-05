"use client";

import { Controller, useFormState } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Calendar } from "./Calendar";
import { Label } from "../Label/Label";

interface CalendarPrimaryProps {
  name: string;
  label?: string;
  control: any;
  required?: boolean;
  className?: string;
  [key: string]: any;
}

const CalendarPrimary = ({
  name,
  label,
  control,
  required = false,
  className = "",
  ...rest
}: CalendarPrimaryProps) => {
  const { t } = useTranslation();
  const { errors } = useFormState({ control });

  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <Label htmlFor={name} className="mb-1 font-medium">
          {label}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Calendar
            selected={field.value}
            onSelect={field.onChange}
            {...rest}
          />
        )}
      />

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

export default CalendarPrimary;
