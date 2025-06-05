import CalendarPrimary from "@/atomic/molecules/Calendar/CalendarPrimary";
import CheckboxPrimary from "@/atomic/molecules/Checkbox/CheckboxPrimary";
import InputPrimary from "@/atomic/molecules/Input/InputPrimary";
import RadioGroupPrimary from "@/atomic/molecules/RadioGroup/RadioGroupPrimary";
import SelectPrimary from "@/atomic/molecules/Select/SelectPrimary";
import { useForm, FormProvider } from "react-hook-form";

export const DynamicForm = ({
  fields,
  onSubmit,
}: {
  fields: any[];
  onSubmit: (data: any) => void;
}) => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = methods;

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
      case "text":
      case "date":
      case "number":
        return (
          <div key={field.id} className="col-span-1">
            <InputPrimary {...commonProps} type={field.type} />
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
          <div key={field.id} className="flex h-full col-span-1 ">
            <CheckboxPrimary {...commonProps} />
          </div>
        );

      //   case "calendar":
      //     return (
      //       <div key={field.id} className="col-span-1">
      //         <CalendarPrimary {...commonProps} />
      //       </div>
      //     );

      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
        <div className="grid items-start grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fields.map(renderField)}
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
