"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { generateSuggestions } from "../../app/lib/suggestionEngine";

export default function SuggestionEngine() {
  const state = useSelector((s: RootState) => s.calculator);

  const suggestions = generateSuggestions(state);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">
        Ways to Save More
      </h3>

      {suggestions.length === 0 ? (
        <p className="text-green-600">
          You are optimally structured 🎉
        </p>
      ) : (
        <div className="space-y-4">
          {suggestions.map((s, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-gray-50 border"
            >
              <p className="font-medium">{s.title}</p>
              <p className="text-sm text-gray-600">
                {s.description}
              </p>
              <p className="text-green-600 font-semibold mt-1">
                Save approx ₹{s.estimatedSaving}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
