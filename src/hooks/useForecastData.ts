// hooks/useForecastData.ts
import { useState, useEffect, useCallback } from "react";
import {
  ForecastFilters,
  ForecastChartData,
  ForecastSummaryData,
  ForecastTableRow,
} from "../types/forecast";
import {
  fetchForecastChart,
  fetchForecastSummary,
  fetchForecastTable,
} from "../services/forecastApi";

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Custom hook for chart data
export const useForecastChart = (filters: ForecastFilters) => {
  const [state, setState] = useState<UseAsyncState<ForecastChartData[]>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetchForecastChart(filters);
      if (response.success) {
        setState({ data: response.data, loading: false, error: null });
      } else {
        setState({
          data: null,
          loading: false,
          error: response.message || "Failed to fetch chart data",
        });
      }
    } catch (error) {
      setState({ data: null, loading: false, error: "Network error occurred" });
    }
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData,
  };
};

// Custom hook for summary data
export const useForecastSummary = (filters: ForecastFilters) => {
  const [state, setState] = useState<UseAsyncState<ForecastSummaryData>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetchForecastSummary(filters);
      if (response.success) {
        setState({ data: response.data, loading: false, error: null });
      } else {
        setState({
          data: null,
          loading: false,
          error: response.message || "Failed to fetch summary data",
        });
      }
    } catch (error) {
      setState({ data: null, loading: false, error: "Network error occurred" });
    }
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData,
  };
};

// Custom hook for table data
export const useForecastTable = (filters: ForecastFilters) => {
  const [state, setState] = useState<UseAsyncState<ForecastTableRow[]>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetchForecastTable(filters);
      if (response.success) {
        setState({ data: response.data, loading: false, error: null });
      } else {
        setState({
          data: null,
          loading: false,
          error: response.message || "Failed to fetch table data",
        });
      }
    } catch (error) {
      setState({ data: null, loading: false, error: "Network error occurred" });
    }
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData,
  };
};

// Combined hook for all forecast data
export const useAllForecastData = (filters: ForecastFilters) => {
  const chartData = useForecastChart(filters);
  const summaryData = useForecastSummary(filters);
  const tableData = useForecastTable(filters);

  const loading = chartData.loading || summaryData.loading || tableData.loading;
  const hasError = !!(chartData.error || summaryData.error || tableData.error);

  const refetchAll = useCallback(() => {
    chartData.refetch();
    summaryData.refetch();
    tableData.refetch();
  }, [chartData.refetch, summaryData.refetch, tableData.refetch]);

  return {
    chart: chartData,
    summary: summaryData,
    table: tableData,
    loading,
    hasError,
    refetchAll,
  };
};
