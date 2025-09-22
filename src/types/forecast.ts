// types/forecast.ts
export interface ForecastFilters {
  organization: string[];
  fiscalYear: string;
  providers: string;
  previous: string;
  period: "monthly" | "quarterly" | "yearly";
}

export interface ForecastChartData {
  month: string;
  actual: number;
  previous: number;
  new: number;
}

export interface ForecastSummaryData {
  currentYear: {
    amount: number;
    difference: number;
    year: string;
  };
  nextYear: {
    amount: number;
    difference: number;
    year: string;
  };
}

export interface ForecastTableQuarters {
  q4_jul: string;
  q1_aug: string;
  q1_sep: string;
  q1_oct: string;
  q2_nov: string;
  q2_dec: string;
  q2_jan: string;
  q3_feb: string;
  q3_mar: string;
  q3_apr: string;
  q4_may: string;
}

export interface ForecastTableRow {
  id: string;
  name: string;
  status?: "Active" | "Inactive";
  isExpandable: boolean;
  children?: ForecastTableRow[];
  quarters: ForecastTableQuarters;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// export interface ForecastApiParams extends ForecastFilters {
//   // Additional API specific params can be added here
// }
