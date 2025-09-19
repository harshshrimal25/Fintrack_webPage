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

const ForecastFilters = () => {
  return (
    <div className="bg-card border-b border-dashboard-border px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        {" "}
        <h1 className="text-2xl font-semibold text-foreground">
          Forecasts
        </h1>{" "}
        <div className="flex items-center space-x-2">
          {" "}
          <Button size="sm" variant="outline">
            {" "}
            <Search className="h-4 w-4 mr-2" /> Search{" "}
          </Button>{" "}
          <Button size="sm" variant="outline">
            {" "}
            Export{" "}
          </Button>{" "}
          <Button size="sm" variant="outline">
            {" "}
            Settings{" "}
          </Button>{" "}
        </div>{" "}
      </div>
      <div className="flex items-center space-x-4 flex-wrap gap-y-2">
        <div className="flex items-center space-x-2">
          <Badge
            // variant="secondary"
            className="bg-primary text-primary-foreground"
          >
            Org : ALL Selected
            <X className="ml-1 h-3 w-3" />
          </Badge>
        </div>

        <Select defaultValue="2025">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="FY" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">FY : 2024, 2024</SelectItem>
            <SelectItem value="2025">FY : 2025, 2026</SelectItem>
            <SelectItem value="2026">FY : 2026, 2027</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="All providers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All providers</SelectItem>
            <SelectItem value="provider1">Provider 1</SelectItem>
            <SelectItem value="provider2">Provider 2</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <Badge
            // variant="secondary"
            className="bg-primary text-primary-foreground"
          >
            Previous: P05-Mar-FY25
            <X className="ml-1 h-3 w-3" />
          </Badge>
        </div>

        <Select defaultValue="monthly">
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm">
          Reset All
        </Button>
        {/* <div className="flex justify-end mr-4">
          <div className="flex items-center space-x-2 ml-4">
            <Button size="sm" variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button size="sm" variant="outline">
              Export
            </Button>
            <Button size="sm" variant="outline">
              Settings
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ForecastFilters;
