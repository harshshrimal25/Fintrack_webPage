import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useForecastFilters } from "../context/ForecastContext";
import { useForecastTable } from "../hooks/useForecastData";
import { ForecastTableRow } from "../types/forecast";

const ForecastTable = () => {
  const { filters } = useForecastFilters();
  const { data, loading, error } = useForecastTable(filters);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  if (loading) {
    return (
      <div className="px-6 pb-6">
        <div className="bg-card border border-dashboard-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 pb-6">
        <div className="bg-card border border-dashboard-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-center h-64">
            <div className="text-red-500">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 pb-6">
      <div className="bg-card border border-dashboard-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-dashboard-subtle border-b border-dashboard-border">
              <tr>
                <th className="text-left p-3 font-medium text-sm border-r border-dashboard-border w-64"></th>
                <th className="text-left p-3 font-medium text-sm border-r border-dashboard-border w-20"></th>

                <th
                  className="text-center p-3 font-medium text-sm border-r border-dashboard-border"
                  colSpan={1}
                >
                  Q4
                </th>
                <th
                  className="text-center p-3 font-medium text-sm border-r border-dashboard-border"
                  colSpan={3}
                >
                  Q1
                </th>
                <th
                  className="text-center p-3 font-medium text-sm border-r border-dashboard-border"
                  colSpan={3}
                >
                  Q2
                </th>
                <th className="text-center p-3 font-medium text-sm" colSpan={3}>
                  Q3
                </th>
              </tr>
              <tr className="border-b border-dashboard-border text-xs text-muted-foreground">
                <th className="text-left p-3 border-r border-dashboard-border"></th>
                <th className="text-left p-3 border-r border-dashboard-border"></th>

                <th className="text-center p-3 border-r border-dashboard-border">
                  Jul-P10-25
                </th>
                <th className="text-center p-3 bg-primary/10 border-r border-dashboard-border">
                  Aug-P11-26
                </th>
                <th className="text-center p-3 border-r border-dashboard-border">
                  Sep-P12-25
                </th>
                <th className="text-center p-3 border-r border-dashboard-border">
                  Oct-P1-26
                </th>
                <th className="text-center p-3 border-r border-dashboard-border">
                  Nov-P2-26
                </th>
                <th className="text-center p-3 border-r border-dashboard-border">
                  Dec-P3-26
                </th>
                <th className="text-center p-3 border-r border-dashboard-border">
                  Jan-P4-26
                </th>
                <th className="text-center p-3 border-r border-dashboard-border">
                  Feb-P5-26
                </th>
                <th className="text-center p-3 border-r border-dashboard-border">
                  Mar-P6-26
                </th>
                <th className="text-center p-3">Apr-P7-26</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((row: ForecastTableRow) => (
                <tr
                  key={row.id}
                  className="border-b border-dashboard-border hover:bg-dashboard-subtle/50"
                >
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      {row.isExpandable && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleRow(row.id)}
                          className="p-0 h-4 w-4"
                        >
                          {expandedRows.has(row.id) ? (
                            <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ChevronRight className="h-3 w-3" />
                          )}
                        </Button>
                      )}
                      <span className="font-medium">{row.name}</span>
                    </div>
                  </td>
                  <td className="p-3 border-r border-dashboard-border">
                    {row.status && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-100 text-green-800"
                      >
                        {row.status}
                      </Badge>
                    )}
                  </td>

                  {/* Q4 - 1 column */}
                  <td className="p-3 font-mono text-sm text-center border-r border-dashboard-border">
                    {row.quarters.q4_jul}
                  </td>

                  {/* Q1 - 3 columns */}
                  <td className="p-3 font-mono text-sm text-center bg-primary/5 border-r border-dashboard-border">
                    {row.quarters.q1_aug}
                  </td>
                  <td className="p-3 font-mono text-sm text-center border-r border-dashboard-border">
                    {row.quarters.q1_sep}
                  </td>
                  <td className="p-3 font-mono text-sm text-center border-r border-dashboard-border">
                    {row.quarters.q1_oct}
                  </td>

                  {/* Q2 - 3 columns */}
                  <td className="p-3 font-mono text-sm text-center border-r border-dashboard-border">
                    {row.quarters.q2_nov}
                  </td>
                  <td className="p-3 font-mono text-sm text-center border-r border-dashboard-border">
                    {row.quarters.q2_dec}
                  </td>
                  <td className="p-3 font-mono text-sm text-center border-r border-dashboard-border">
                    {row.quarters.q2_jan}
                  </td>

                  {/* Q3 - 3 columns */}
                  <td className="p-3 font-mono text-sm text-center border-r border-dashboard-border">
                    {row.quarters.q3_feb}
                  </td>
                  <td className="p-3 font-mono text-sm text-center border-r border-dashboard-border">
                    {row.quarters.q3_mar}
                  </td>
                  <td className="p-3 font-mono text-sm text-center">
                    {row.quarters.q3_apr}
                  </td>
                </tr>
              )) || []}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ForecastTable;
