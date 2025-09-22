import { ChevronDown, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useForecastFilters } from "../context/ForecastContext";

const ForecastFilters = () => {
  const { filters, updateFilters, resetFilters } = useForecastFilters();

  const handleFiscalYearChange = (value: string) => {
    updateFilters({ fiscalYear: value });
  };

  const handleProvidersChange = (value: string) => {
    updateFilters({ providers: value });
  };

  const handlePeriodChange = (value: "monthly" | "quarterly" | "yearly") => {
    updateFilters({ period: value });
  };

  const removeOrganizationFilter = () => {
    updateFilters({ organization: [] });
  };

  const removePreviousFilter = () => {
    updateFilters({ previous: "" });
  };

  return (
    <div className="bg-card border-b border-dashboard-border px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-foreground">Forecasts</h1>
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="outline">
            <Search className="h-4 w-4 mr-2" /> Search
          </Button>
          <Button size="sm" variant="outline">
            Export
          </Button>
          <Button size="sm" variant="outline">
            Settings
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-4 flex-wrap gap-y-2">
        {filters.organization.length > 0 && (
          <div className="flex items-center space-x-2">
            <Badge className="bg-primary text-primary-foreground">
              Org : {filters.organization.join(", ")} Selected
              <X
                className="ml-1 h-3 w-3 cursor-pointer"
                onClick={removeOrganizationFilter}
              />
            </Badge>
          </div>
        )}

        <Select
          value={filters.fiscalYear}
          onValueChange={handleFiscalYearChange}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="FY" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">FY : 2024, 2024</SelectItem>
            <SelectItem value="2025">FY : 2025, 2026</SelectItem>
            <SelectItem value="2026">FY : 2026, 2027</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.providers} onValueChange={handleProvidersChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="All providers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All providers</SelectItem>
            <SelectItem value="provider1">Provider 1</SelectItem>
            <SelectItem value="provider2">Provider 2</SelectItem>
          </SelectContent>
        </Select>

        {filters.previous && (
          <div className="flex items-center space-x-2">
            <Badge className="bg-primary text-primary-foreground">
              Previous: {filters.previous}
              <X
                className="ml-1 h-3 w-3 cursor-pointer"
                onClick={removePreviousFilter}
              />
            </Badge>
          </div>
        )}

        <Select value={filters.period} onValueChange={handlePeriodChange}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm" onClick={resetFilters}>
          Reset All
        </Button>
      </div>
    </div>
  );
};

export default ForecastFilters;
