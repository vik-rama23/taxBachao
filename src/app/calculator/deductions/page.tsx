"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateField, nextStep, prevStep } from "../../store/calculatorSlice";
import { useRouter } from "next/navigation";

export default function DeductionPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((s: RootState) => s.calculator);

  const handleChange = (key: any, value: number) => {
    dispatch(updateField({ key, value }));
  };

  const handleContinue = () => {
    dispatch(nextStep());
    router.push("/calculator/results");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        Investments & Deductions
      </h2>

      {[
        "section_80c",
        "nps_80ccd1b",
        "nps_employer_80ccd2",
        "home_loan_interest",
        "health_insurance",
      ].map((field) => (
        <div key={field} className="mb-4">
          <label className="text-sm text-gray-600">
            {field?.replace(/_/g, " ").toUpperCase()}
          </label>
          <input
            type="number"
            value={(state as any)[field]}
            onChange={(e) =>
              handleChange(field, Number(e.target.value))
            }
            className="w-full mt-1 p-3 border rounded-xl"
          />
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            dispatch(prevStep());
            router.push("/calculator/salary");
          }}
          className="px-6 py-3 rounded-xl border"
        >
          Back
        </button>

        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
