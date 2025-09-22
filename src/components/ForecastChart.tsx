import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { useForecastFilters } from "../context/ForecastContext";
import { useForecastChart } from "../hooks/useForecastData";

const ForecastChart = () => {
  const { filters } = useForecastFilters();
  const { data, loading, error } = useForecastChart(filters);

  if (loading) {
    return (
      <div className="px-6 py-4">
        <Card>
          <div className="bg-gray-50 px-6 py-3 border-b">
            <div className="flex items-center space-x-2">
              <ChevronDown className="h-4 w-4" />
              <CardTitle className="text-lg">Chart</CardTitle>
            </div>
          </div>
          <CardContent className="flex items-center justify-center h-80">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 py-4">
        <Card>
          <div className="bg-gray-50 px-6 py-3 border-b">
            <div className="flex items-center space-x-2">
              <ChevronDown className="h-4 w-4" />
              <CardTitle className="text-lg">Chart</CardTitle>
            </div>
          </div>
          <CardContent className="flex items-center justify-center h-80">
            <div className="text-red-500">{error}</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="px-6 py-4">
      <Card>
        <div className="bg-gray-50 px-6 py-3 border-b">
          <div className="flex items-center space-x-2">
            <ChevronDown className="h-4 w-4" />
            <CardTitle className="text-lg">Chart</CardTitle>
          </div>
        </div>
        <CardHeader className="flex flex-row items-center justify-end pb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <span>Actual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span>Previous</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>New</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data || []}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip
                  formatter={(value) => [
                    `$${((value as number) / 1000000).toFixed(2)}M`,
                    "",
                  ]}
                  labelStyle={{ color: "#333" }}
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
                  strokeDasharray="5 5"
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#9ca3af"
                  strokeWidth={2}
                  dot={{ fill: "#9ca3af", strokeWidth: 2, r: 4 }}
                  strokeDasharray="2 2"
                />
                <Line
                  type="monotone"
                  dataKey="new"
                  stroke="hsl(238 77% 58%)"
                  strokeWidth={3}
                  dot={{ fill: "hsl(238 77% 58%)", strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForecastChart;
