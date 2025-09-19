import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Oct 24", actual: 850000, previous: 820000, new: 850000 },
  { month: "Nov 24", actual: 780000, previous: 850000, new: 780000 },
  { month: "Dec 24", actual: 920000, previous: 820000, new: 920000 },
  { month: "Jan 25", actual: 890000, previous: 870000, new: 890000 },
  { month: "Feb 25", actual: 950000, previous: 880000, new: 950000 },
  { month: "Mar 25", actual: 1020000, previous: 900000, new: 1020000 },
  { month: "Apr 25", actual: 980000, previous: 920000, new: 980000 },
  { month: "May 25", actual: 1150000, previous: 950000, new: 1150000 },
  { month: "Jun 25", actual: 1080000, previous: 980000, new: 1080000 },
  { month: "Jul 25", actual: 1100000, previous: 1000000, new: 1100000 },
  { month: "Aug 25", actual: 1050000, previous: 1020000, new: 1050000 },
  { month: "Sep 25", actual: 1280000, previous: 1100000, new: 1280000 },
  { month: "Oct 25", actual: 1200000, previous: 1150000, new: 1200000 },
  { month: "Nov 25", actual: 1180000, previous: 1180000, new: 1180000 },
  { month: "Dec 25", actual: 1350000, previous: 1200000, new: 1350000 },
  { month: "Jan 26", actual: 1320000, previous: 1250000, new: 1320000 },
  { month: "Feb 26", actual: 1400000, previous: 1300000, new: 1400000 },
  { month: "Mar 26", actual: 1380000, previous: 1350000, new: 1380000 },
];

const ForecastChart = () => {
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
              <LineChart data={data}>
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

          {/* <div className="flex items-center justify-center space-x-4 mt-4">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-3 py-1 bg-muted rounded">Q4</span>
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded">
                Q1
              </span>
              <span className="px-3 py-1 bg-muted rounded">Q2</span>
              <span className="px-3 py-1 bg-muted rounded">Q3</span>
            </div>
            <Button variant="ghost" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForecastChart;
