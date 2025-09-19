import DashboardHeader from "@/components/DashboardHeader";
import ForecastFilters from "@/components/ForecastFilters";
import ForecastSummary from "@/components/ForecastSummary";
import ForecastChart from "@/components/ForecastChart";
import ForecastTable from "@/components/ForecastTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <ForecastFilters />
      <ForecastSummary />
      <ForecastChart />
      <ForecastTable />
    </div>
  );
};

export default Index;