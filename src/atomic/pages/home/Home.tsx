import { useFetchInsuranceForm } from "@/atomic/services/customTanstackHooks/useFetchInsuranceForm/useFetchInsuranceForm";

const HomePage = () => {
  const { data } = useFetchInsuranceForm();
  console.log({ data });
  return (
    <div
    // className={
    //   "bg-white dark:bg-gray-900 dark:text-white flex-1 min-h-[calc(100vh-140px)]"
    // }
    >
      Home
    </div>
  );
};

export default HomePage;
