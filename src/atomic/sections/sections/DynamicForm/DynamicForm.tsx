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
  const { register, handleSubmit, watch, setValue, control } = methods;

  // render a single field
  const renderField = (field: any) => {
    const visible = field.visibility
      ? watch(field.visibility.dependsOn) === field.visibility.value
      : true;

    if (!visible) return null;

    if (field.type === "group") {
      return (
        <div key={field.id} className="p-4 my-2 border rounded">
          <h3 className="mb-2 font-semibold">{field.label}</h3>
          {field.fields.map(renderField)}
        </div>
      );
    }

    switch (field.type) {
      case "text":
      case "date":
      case "number":
        return (
          <div key={field.id} className="flex flex-col mb-4">
            <label>{field.label}</label>
            <input
              type={field.type}
              {...register(field.id, { required: field.required })}
              className="px-2 py-1 border rounded"
            />
          </div>
        );
      case "select":
        return (
          <SelectPrimary
            name={field.id}
            label={field.label}
            control={control}
            required={field.required}
            options={(field.options || []).map((opt: string) => ({
              label: opt,
              value: opt,
            }))}
          />
        );
      case "radio":
        return (
          <div key={field.id} className="flex flex-col mb-4">
            <label>{field.label}</label>
            <div className="flex gap-4">
              {field.options?.map((opt: string) => (
                <label key={opt} className="flex items-center gap-1">
                  <input
                    type="radio"
                    value={opt}
                    {...register(field.id, { required: field.required })}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        );
      case "checkbox":
        return (
          <div key={field.id} className="flex flex-col mb-4">
            <label>{field.label}</label>
            <div className="flex flex-wrap gap-4">
              {field.options?.map((opt: string) => (
                <label key={opt} className="flex items-center gap-1">
                  <input type="checkbox" value={opt} {...register(field.id)} />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map(renderField)}
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
