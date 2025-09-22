// / services/forecastApi.ts
import {
  ForecastFilters,
  ForecastChartData,
  ForecastSummaryData,
  ForecastTableRow,
  ApiResponse,
} from "../types/forecast";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock data generators
const generateChartData = (filters: ForecastFilters): ForecastChartData[] => {
  const baseData = [
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

  // Apply filters to modify data
  const multiplier = filters.fiscalYear === "2025" ? 1 : 1.1;
  const providerMultiplier = filters.providers === "all" ? 1 : 0.8;

  return baseData.map((item) => ({
    ...item,
    actual: Math.round(item.actual * multiplier * providerMultiplier),
    previous: Math.round(item.previous * multiplier * providerMultiplier),
    new: Math.round(item.new * multiplier * providerMultiplier),
  }));
};

const generateSummaryData = (filters: ForecastFilters): ForecastSummaryData => {
  const baseAmount2025 = 12456789;
  const baseAmount2026 = 13789012;

  const multiplier = filters.providers === "all" ? 1 : 0.85;
  const orgMultiplier = filters.organization.length > 0 ? 1 : 0.9;

  return {
    currentYear: {
      amount: Math.round(baseAmount2025 * multiplier * orgMultiplier),
      difference: -123000,
      year: "2025",
    },
    nextYear: {
      amount: Math.round(baseAmount2026 * multiplier * orgMultiplier),
      difference: 456000,
      year: "2026",
    },
  };
};

const generateTableData = (filters: ForecastFilters): ForecastTableRow[] => {
  const baseData = [
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
      status: "Active" as const,
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
      status: "Active" as const,
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
      status: "Active" as const,
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

  // Apply filters to modify data if needed
  return filters.providers === "all" ? baseData : baseData.slice(0, 2);
};

// API Functions
export const fetchForecastChart = async (
  filters: ForecastFilters
): Promise<ApiResponse<ForecastChartData[]>> => {
  await delay(800); // Simulate API call

  try {
    const data = generateChartData(filters);
    return {
      data,
      success: true,
      message: "Chart data fetched successfully",
    };
  } catch (error) {
    return {
      data: [],
      success: false,
      message: "Failed to fetch chart data",
    };
  }
};

export const fetchForecastSummary = async (
  filters: ForecastFilters
): Promise<ApiResponse<ForecastSummaryData>> => {
  await delay(600); // Simulate API call

  try {
    const data = generateSummaryData(filters);
    return {
      data,
      success: true,
      message: "Summary data fetched successfully",
    };
  } catch (error) {
    return {
      data: {
        currentYear: { amount: 0, difference: 0, year: "2025" },
        nextYear: { amount: 0, difference: 0, year: "2026" },
      },
      success: false,
      message: "Failed to fetch summary data",
    };
  }
};

export const fetchForecastTable = async (
  filters: ForecastFilters
): Promise<ApiResponse<ForecastTableRow[]>> => {
  await delay(1000); // Simulate API call

  try {
    const data = generateTableData(filters);
    return {
      data,
      success: true,
      message: "Table data fetched successfully",
    };
  } catch (error) {
    return {
      data: [],
      success: false,
      message: "Failed to fetch table data",
    };
  }
};
