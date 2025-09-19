import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ForecastRow {
  id: string;
  name: string;
  status?: "Active" | "Inactive";
  isExpandable: boolean;
  children?: ForecastRow[];
  quarters: {
    // Q4 columns
    q4_jul: string;
    // Q1 columns
    q1_aug: string;
    q1_sep: string;
    q1_oct: string;
    // Q2 columns
    q2_nov: string;
    q2_dec: string;
    q2_jan: string;
    // Q3 columns
    q3_feb: string;
    q3_mar: string;
    q3_apr: string;
    q4_may: string;
  };
}

const tableData: ForecastRow[] = [
  {
    id: "total",
    name: "Total",
    isExpandable: true,
    quarters: {
      q4_jul: "$1,234,567",
      q1_aug: "$1,456,789",
      q1_sep: "$1,345,678",
      q1_oct: "$1,567,890",
      q2_nov: "$1,678,901",
      q2_dec: "$1,789,012",
      q2_jan: "$1,890,123",
      q3_feb: "$1,901,234",
      q3_mar: "$2,012,345",
      q3_apr: "$2,123,456",
      q4_may: "$2,234,567",
    },
  },
  {
    id: "acare",
    name: "ACARE | Unlinked",
    status: "Active",
    isExpandable: true,
    quarters: {
      q4_jul: "$456,789",
      q1_aug: "$567,890",
      q1_sep: "$523,456",
      q1_oct: "$612,345",
      q2_nov: "$678,901",
      q2_dec: "$734,567",
      q2_jan: "$789,012",
      q3_feb: "$801,234",
      q3_mar: "$856,789",
      q3_apr: "$912,345",
      q4_may: "$967,890",
    },
  },
  {
    id: "acw",
    name: "ACW | Unlinked",
    status: "Active",
    isExpandable: true,
    quarters: {
      q4_jul: "$345,678",
      q1_aug: "$423,456",
      q1_sep: "$389,012",
      q1_oct: "$456,789",
      q2_nov: "$501,234",
      q2_dec: "$567,890",
      q2_jan: "$612,345",
      q3_feb: "$658,901",
      q3_mar: "$701,234",
      q3_apr: "$756,789",
      q4_may: "$812,345",
    },
  },
  {
    id: "adplatforms",
    name: "Ad Platforms | Unlinked",
    status: "Active",
    isExpandable: true,
    quarters: {
      q4_jul: "$432,100",
      q1_aug: "$465,443",
      q1_sep: "$433,210",
      q1_oct: "$498,756",
      q2_nov: "$499,766",
      q2_dec: "$486,555",
      q2_jan: "$488,766",
      q3_feb: "$441,099",
      q3_mar: "$454,322",
      q3_apr: "$454,322",
      q4_may: "$454,332",
    },
  },
];

const ForecastTable = () => {
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
              {tableData.map((row) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ForecastTable;
