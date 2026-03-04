"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { goToStep } from "../../app/store/calculatorSlice";
import { validateSalary } from "../../app/lib/validation";

export default function TabBar() {
  const dispatch = useDispatch();
  const { step, isCalculated } = useSelector(
    (s: RootState) => s.calculator
  );
  const state = useSelector((s: RootState) => s.calculator);
  const salaryErrors = validateSalary(state);


  const handleTabClick = (value: number) => {
    if (value === 2 && Object.keys(salaryErrors).length > 0) {
      alert("Please complete Salary details first.");
      return;
    }

    dispatch(goToStep(value));
  };

  return (
    <div className="bg-white rounded-2xl shadow p-2 flex gap-2 mb-6">
      {[
        { label: "Salary", value: 1 },
        { label: "Investments", value: 2 },
        { label: "Results", value: 3 },
      ].map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleTabClick(tab.value)}
          className={`flex-1 py-3 rounded-xl text-sm font-medium transition
    ${step === tab.value
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
            }
    ${tab.value === 3 && !isCalculated
              ? "bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200"
              : ""
            }
  `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
