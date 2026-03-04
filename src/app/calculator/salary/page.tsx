// src/app/calculator/salary/page.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateField, nextStep } from "../../store/calculatorSlice";
import { useRouter } from "next/navigation";

export default function SalaryPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const salary = useSelector((state: RootState) => state.calculator);

  const handleChange = (key: any, value: number) => {
    dispatch(updateField({ key, value }));
  };

  const handleContinue = () => {
    dispatch(nextStep());
    router.push("/calculator/deductions");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        Tell us about your salary
      </h2>

      {["annual_ctc", "basic_salary", "hra_received", "rent_paid"].map(
        (field) => (
          <div key={field} className="mb-4">
            <label className="text-sm font-medium text-gray-600">
              {field.replace(/_/g, " ").toUpperCase()}
            </label>
            <input
              type="number"
              value={(salary as any)[field]}
              onChange={(e) =>
                handleChange(field, Number(e.target.value))
              }
              className="w-full mt-1 p-3 border rounded-xl"
            />
          </div>
        )
      )}

      <button
        onClick={handleContinue}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl w-full"
      >
        Continue
      </button>
    </div>
  );
}
