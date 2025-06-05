import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "@/atomic/molecules/Button/button";
import CheckboxPrimary from "@/atomic/molecules/Checkbox/CheckboxPrimary";
import InputPrimary from "@/atomic/molecules/Input/InputPrimary";
import RadioGroupPrimary from "@/atomic/molecules/RadioGroup/RadioGroupPrimary";
import SelectPrimary from "@/atomic/molecules/Select/SelectPrimary";
import { useSubmitInsuranceForm } from "@/atomic/services/customTanstackHooks/useSubmitInsuranceForm/useSubmitInsuranceForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const DynamicForm = forwardRef(
  (
    {
      fields,
      formId,
      onSubmit,
    }: {
      fields: any[];
      formId: string;
      onSubmit?: (data: any) => void;
    },
    ref
  ) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const STORAGE_KEY = `dynamic_form_draft_${formId}`;

    const skipSaveRef = useRef(false);

    const methods = useForm({
      defaultValues: JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"),
    });

    const {
      handleSubmit,
      watch,
      control,
      reset,
      formState: { isSubmitting },
    } = methods;

    const { mutateAsync } = useSubmitInsuranceForm();

    useImperativeHandle(ref, () => ({
      reset: () => {
        skipSaveRef.current = true;
        reset({});
        localStorage.removeItem(STORAGE_KEY);
        setTimeout(() => {
          skipSaveRef.current = false;
        }, 100);
      },
    }));

    useEffect(() => {
      const subscription = watch((value) => {
        if (!skipSaveRef.current) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
        }
      });
      return () => subscription.unsubscribe();
    }, [watch]);

    const renderField = (field: any) => {
      const visible = field.visibility
        ? watch(field.visibility.dependsOn) === field.visibility.value
        : true;
      if (!visible) return null;

      if (field.type === "group") {
        return (
          <div key={field.id} className="p-4 my-2 border rounded col-span-full">
            <h3 className="mb-2 font-semibold">{field.label}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
              {field.fields.map(renderField)}
            </div>
          </div>
        );
      }

      const commonProps = {
        key: field.id,
        name: field.id,
        label: field.label,
        control,
        required: field.required,
      };

      switch (field.type) {
        case "date":
        case "text":
          return (
            <div key={field.id} className="col-span-1">
              <InputPrimary type={field.type} {...commonProps} />
            </div>
          );
        case "number":
          return (
            <div key={field.id} className="col-span-1">
              <InputPrimary
                type={field.type}
                inputProps={{ valueAsNumber: true }}
                {...commonProps}
              />
            </div>
          );
        case "select":
          return (
            <div key={field.id} className="col-span-1">
              <SelectPrimary
                {...commonProps}
                options={field.options}
                dynamicOptions={field.dynamicOptions}
                watch={watch}
              />
            </div>
          );
        case "radio":
          return (
            <div key={field.id} className="col-span-1">
              <RadioGroupPrimary
                {...commonProps}
                options={(field.options || []).map((opt: string) => ({
                  label: opt,
                  value: opt,
                }))}
              />
            </div>
          );
        case "checkbox":
          return (
            <div key={field.id} className="flex h-full col-span-1">
              <CheckboxPrimary {...commonProps} />
            </div>
          );
        default:
          return null;
      }
    };

    const handleFinalSubmit = async (data: any) => {
      if (onSubmit) {
        onSubmit(data);
        return;
      }

      try {
        const res = await mutateAsync(data);
        toast.success(res?.message || t("form_success"));
        localStorage.removeItem(STORAGE_KEY);
        skipSaveRef.current = true;
        reset({});
        navigate("/");
        setTimeout(() => {
          skipSaveRef.current = false;
        }, 100);
      } catch (error: any) {
        const msg =
          error?.response?.data?.message || error?.message || t("form_error");
        toast.error(msg);
      }
    };

    return (
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFinalSubmit)} className="space-y-6">
          <div className="grid items-start grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {fields.map(renderField)}
          </div>
          <Button type="submit" isLoading={isSubmitting}>
            {t("form_placeholders.submit", "Submit")}
          </Button>
        </form>
      </FormProvider>
    );
  }
);
