"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

const steps = [
  { id: 1, label: "Salary" },
  { id: 2, label: "Investments" },
  { id: 3, label: "Results" },
];

export default function Stepper() {
  const step = useSelector((s: RootState) => s.calculator.step);

  return (
    <div className="flex items-center justify-between mb-10">
      {steps.map((s, index) => {
        const isActive = step >= s.id;

        return (
          <div key={s.id} className="flex-1 flex items-center">
            
            <div className="flex flex-col items-center w-full">

              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {s.id}
              </div>

              <p
                className={`text-sm mt-2 ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {s.label}
              </p>

            </div>

            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] transition
                ${
                  step > s.id
                    ? "bg-blue-600"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
