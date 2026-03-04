"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  oldTax: number;
  newTax: number;
}

export default function TaxDonutChart({
  oldTax,
  newTax,
}: Props) {
  const data = [
    {
      name: "Old Regime",
      value: oldTax,
    },
    {
      name: "New Regime",
      value: newTax,
    },
  ];

  const COLORS = ["#2563eb", "#22c55e"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Tax Comparison
      </h3>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value: number | undefined) =>
                value ? `₹${value?.toLocaleString()}` : "₹0"
              }
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-around mt-4 text-sm">
        <div>
          <p className="text-gray-500">Old Regime Tax</p>
          <p className="font-semibold">
            ₹{oldTax?.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-500">New Regime Tax</p>
          <p className="font-semibold">
            ₹{newTax?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
