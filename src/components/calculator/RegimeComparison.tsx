"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

export default function RegimeComparison() {
  const { old_regime_tax, new_regime_tax } =
    useSelector((s: RootState) => s.calculator);

  if (!old_regime_tax || !new_regime_tax) return null;

  const isOldBetter = old_regime_tax < new_regime_tax;

  return (
    <div className="grid grid-cols-2 gap-6">
      <div
        className={`p-6 rounded-2xl shadow ${
          isOldBetter ? "bg-blue-600 text-white" : "bg-white"
        }`}
      >
        <p className="text-sm">Old Regime</p>
        <p className="text-2xl font-bold">
          ₹ {old_regime_tax.toLocaleString()}
        </p>
      </div>

      <div
        className={`p-6 rounded-2xl shadow ${
          !isOldBetter ? "bg-blue-600 text-white" : "bg-white"
        }`}
      >
        <p className="text-sm">New Regime</p>
        <p className="text-2xl font-bold">
          ₹ {new_regime_tax.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
