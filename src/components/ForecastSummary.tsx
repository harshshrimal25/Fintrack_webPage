import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForecastFilters } from "../context/ForecastContext";
import { useForecastSummary } from "../hooks/useForecastData";

const ForecastSummary = () => {
  const { filters } = useForecastFilters();
  const { data, loading, error } = useForecastSummary(filters);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDifference = (diff: number) => {
    const absValue = Math.abs(diff);
    const sign = diff >= 0 ? "+" : "-";
    const formatted =
      absValue >= 1000000
        ? `${(absValue / 1000000).toFixed(1)}M`
        : `${(absValue / 1000).toFixed(0)}k`;
    return `${sign}${formatted}`;
  };

  if (loading) {
    return (
      <div className="px-6 py-4 bg-dashboard-subtle">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-8">
            <Card className="w-64">
              <CardContent className="flex items-center justify-center h-24">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              </CardContent>
            </Card>
            <Card className="w-64">
              <CardContent className="flex items-center justify-center h-24">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary-hover rounded-full"
            >
              Operational
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Fiscal Month Totals
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 py-4 bg-dashboard-subtle">
        <div className="flex items-start justify-between mb-6">
          <div className="text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-4 bg-dashboard-subtle">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-8">
          <Card className="w-64">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {data?.currentYear.year} Current Fcst.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data ? formatCurrency(data.currentYear.amount) : "$0"}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                vs Previous Fcst.{" "}
                {data ? formatDifference(data.currentYear.difference) : "$0"}
              </p>
            </CardContent>
          </Card>
          <Card className="w-64">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {data?.nextYear.year} Current Fcst.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data ? formatCurrency(data.nextYear.amount) : "$0"}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                vs Previous Fcst.{" "}
                {data ? formatDifference(data.nextYear.difference) : "$0"}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary-hover rounded-full"
          >
            Operational
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Fiscal Month Totals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForecastSummary;
