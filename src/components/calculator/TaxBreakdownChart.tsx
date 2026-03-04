"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  oldTaxable: number;
  newTaxable: number;
}

export default function TaxBreakdownChart({
  oldTaxable,
  newTaxable,
}: Props) {
  const data = [
    {
      name: "Old Regime",
      taxableIncome: oldTaxable,
    },
    {
      name: "New Regime",
      taxableIncome: newTaxable,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">
        Taxable Income Comparison
      </h3>

      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="taxableIncome" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
