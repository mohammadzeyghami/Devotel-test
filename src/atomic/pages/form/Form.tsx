import { useState } from "react";
import { useFetchInsuranceForm } from "@/atomic/services/customTanstackHooks/useFetchInsuranceForm/useFetchInsuranceForm";
import { useTranslation } from "react-i18next";
import { DynamicForm } from "@/atomic/sections/sections/DynamicForm/DynamicForm";

const FormPage = () => {
  const { data, isLoading, isError } = useFetchInsuranceForm();
  const { t } = useTranslation();
  const [selectedForm, setSelectedForm] = useState<any | null>(null);

  if (isLoading) {
    return <div className="p-4 text-gray-500">{t("loading")}</div>;
  }

  if (isError) {
    return <div className="p-4 text-red-500">{t("error_loading_forms")}</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {!selectedForm && (
        <>
          <h2 className="text-lg font-semibold">{t("available_forms")}</h2>
          {data?.map((form) => (
            <button
              key={form.formId}
              onClick={() => setSelectedForm(form)}
              className="p-4 text-left transition border border-gray-300 rounded shadow hover:shadow-md"
            >
              {t(`forms.${form.formId}`) || form.title}
            </button>
          ))}
        </>
      )}

      {selectedForm && (
        <div>
          <div className="mb-4">
            <button
              onClick={() => setSelectedForm(null)}
              className="px-3 py-1 mb-2 text-sm text-white bg-blue-500 rounded"
            >
              ← {t("available_forms")}
            </button>
            <h3 className="text-lg font-bold">
              {t(`forms.${selectedForm.formId}`) || selectedForm.title}
            </h3>
          </div>
          <DynamicForm
            fields={selectedForm.fields}
            onSubmit={(data) => console.log("Submitted data:", data)}
          />
        </div>
      )}
    </div>
  );
};

export default FormPage;
