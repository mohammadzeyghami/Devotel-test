import PrimaryTable from "@/atomic/molecules/Table/TablePrimary";
import type { InsuranceRow } from "@/atomic/services/axios/formsSubmissions/interface";
import { useGetSubmissions } from "@/atomic/services/customTanstackHooks/useGetSubmissions/useGetSubmissions";

const HomePage = () => {
  const { data, isLoading } = useGetSubmissions();

  const castedColumns = data?.columns as (keyof Omit<InsuranceRow, "id">)[];
  const castedData = data?.data as InsuranceRow[];

  return (
    <div>
      <PrimaryTable
        columns={castedColumns || []}
        data={castedData || []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default HomePage;
