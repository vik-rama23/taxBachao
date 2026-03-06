"use client";

import { useSearchParams } from "next/navigation";

export default function DocumentAnalysisPage() {

  const params = useSearchParams();

  const data = JSON.parse(params.get("data") || "{}");
  const insights = JSON.parse(params.get("insights") || "{}");

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">

      <h1 className="text-2xl font-semibold">
        AI Financial Report
      </h1>

      {/* Extracted Data */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">

        <h2 className="font-semibold text-lg mb-3">
          📎 Extracted Financial Data
        </h2>

        <div className="space-y-2">

          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex justify-between">

              <span className="text-gray-600 capitalize">
                {key.replace("_", " ")}
              </span>

              <span className="font-medium">
                ₹{String(value)}
              </span>

            </div>
          ))}

        </div>

      </div>


      {/* Portfolio Snapshot
      <div className="bg-white shadow rounded-xl p-6">

        <h2 className="font-semibold text-lg mb-3">
          📊 Portfolio Snapshot
        </h2>

        <p className="text-gray-700">
          {insights?.snapshot}
        </p>

      </div> */}

      {/* Tax Implications */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">

        <h2 className="font-semibold text-lg mb-3">
          ⚠️ Tax Implications
        </h2>

        <ul className="list-disc ml-5 space-y-1">
          {insights?.tax_implications?.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

      </div>

      {/* Optimization Ideas */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">

        <h2 className="font-semibold text-lg mb-3">
          💡 Tax Optimization Ideas
        </h2>

        <ul className="list-disc ml-5 space-y-1">
          {insights?.optimization?.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

      </div>

      
    </div>
  );
}
