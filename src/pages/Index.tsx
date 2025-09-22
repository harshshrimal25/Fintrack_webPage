import DashboardHeader from "../components/DashboardHeader";
import ForecastFilters from "../components/ForecastFilters";
import ForecastSummary from "../components/ForecastSummary";
import ForecastChart from "../components/ForecastChart";
import ForecastTable from "../components/ForecastTable";
import { ForecastProvider } from "../context/ForecastContext";

const Index = () => {
  return (
    <ForecastProvider>
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main>
          <ForecastFilters />
          <ForecastSummary />
          <ForecastChart />
          <ForecastTable />
        </main>
      </div>
    </ForecastProvider>
  );
};

export default Index;
