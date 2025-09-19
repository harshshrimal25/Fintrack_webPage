import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ForecastSummary = () => {
  return (
    <div className="px-6 py-4 bg-dashboard-subtle">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-8">
          <Card className="w-64">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                2025 Current Fcst.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,456,789</div>
              <p className="text-xs text-muted-foreground mt-1">
                vs Previous Fcst. -$123k
              </p>
            </CardContent>
          </Card>
          <Card className="w-64">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                2026 Current Fcst.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$13,789,012</div>
              <p className="text-xs text-muted-foreground mt-1">
                vs Previous Fcst. +$456k
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
