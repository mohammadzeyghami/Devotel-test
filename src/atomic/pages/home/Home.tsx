import PrimaryTable from "@/atomic/molecules/Table/TablePrimary";
import { useGetSubmissions } from "@/atomic/services/customTanstackHooks/useGetSubmissions/useGetSubmissions";

const HomePage = () => {
  const { data } = useGetSubmissions();

  return (
    <div>
      {data?.data && <PrimaryTable columns={data?.columns} data={data?.data} />}
    </div>
  );
};

export default HomePage;
