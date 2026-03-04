"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

import TaxDonutChart from "./TaxDonutChart";
import TaxBreakdownChart from "./TaxBreakdownChart";
import InvestmentOptimizer from "./InvestmentOptimizer";
import AIExplanation from "./AIExplanation";
import DownloadReport from "./DownloadReport";
import TaxSummaryCard from "./TaxSummaryCard";

interface Suggestion {
  type: string;
  message: string;
  tax_saving: number;
}

interface ApiResponse {
  old_tax: number;
  new_tax: number;
  recommended: "old" | "new";
  difference: number;
  old_taxable_income: number;
  new_taxable_income: number;
  suggestions: Suggestion[];
}

export default function ResultsView() {
  const state = useSelector((s: RootState) => s.calculator);
 const API_URL="http://127.0.0.1:8000"
  const [data, setData] = useState<ApiResponse | null>(
    null
  );

  const filtered: Record<string, any> = {};
  for (const [key, value] of Object.entries(state || {})) {
    if (key === "step" || key === "isCalculated") continue;
    filtered[key] = value === "" ? 0 : value;
  }

  useEffect(() => {
    const calculate = async () => {
      const res = await fetch(`${API_URL}/calculate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filtered),
      });

      const response = await res.json();

      setData(response);
    };

    calculate();
  }, []);

  if (!data) return <p>Calculating...</p>;

  return (
    <div id="tax-report" className="space-y-8">

      <TaxSummaryCard
        recommended={data.recommended}
        difference={data.difference}
        oldTax={data.old_tax}
        newTax={data.new_tax}
      />
      {/* Donut Chart */}
      <TaxDonutChart
        oldTax={data?.old_tax}
        newTax={data?.new_tax}
      />

      {/* Taxable Income Breakdown */}
      {/* <TaxBreakdownChart
        oldTaxable={data?.old_taxable_income}
        newTaxable={data?.new_taxable_income}
      /> */}

      {/* AI Explanation */}
      <AIExplanation
        recommended={data?.recommended}
        difference={data?.difference}
        oldTaxable={data?.old_taxable_income}
        newTaxable={data?.new_taxable_income}
      />

      {/* Investment Optimization */}
      <InvestmentOptimizer
        suggestions={data?.suggestions}
      />

      {/* PDF Download */}
      <div className="flex justify-center pt-4">
        <DownloadReport />
      </div>

    </div>
  );
}
