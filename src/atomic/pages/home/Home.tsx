import PrimaryTable from "@/atomic/molecules/Table/TablePrimary";
import { useGetSubmissions } from "@/atomic/services/customTanstackHooks/useGetSubmissions/useGetSubmissions";
const HomePage = () => {
  const { data, isLoading } = useGetSubmissions();

  return (
    <div>
      <PrimaryTable
        columns={data?.columns || []}
        data={data?.data || []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default HomePage;
