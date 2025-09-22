// context/ForecastContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ForecastFilters } from "../types/forecast";

interface ForecastContextType {
  filters: ForecastFilters;
  updateFilters: (newFilters: Partial<ForecastFilters>) => void;
  resetFilters: () => void;
}

const defaultFilters: ForecastFilters = {
  organization: ["ALL"],
  fiscalYear: "2025",
  providers: "all",
  previous: "P05-Mar-FY25",
  period: "monthly",
};

const ForecastContext = createContext<ForecastContextType | undefined>(
  undefined
);

export const useForecastFilters = () => {
  const context = useContext(ForecastContext);
  if (context === undefined) {
    throw new Error(
      "useForecastFilters must be used within a ForecastProvider"
    );
  }
  return context;
};

interface ForecastProviderProps {
  children: ReactNode;
}

export const ForecastProvider: React.FC<ForecastProviderProps> = ({
  children,
}) => {
  const [filters, setFilters] = useState<ForecastFilters>(defaultFilters);

  const updateFilters = (newFilters: Partial<ForecastFilters>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const value: ForecastContextType = {
    filters,
    updateFilters,
    resetFilters,
  };

  return (
    <ForecastContext.Provider value={value}>
      {children}
    </ForecastContext.Provider>
  );
};
