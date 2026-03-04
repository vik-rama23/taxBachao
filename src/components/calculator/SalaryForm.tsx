"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import {
  updateField,
  nextStep,
} from "../../app/store/calculatorSlice";
import { validateSalary } from "../../app/lib/validation";
import { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import ValidationBanner from "@/components/common/ValidationBanner";

export default function SalaryForm() {
  const dispatch = useDispatch();
  const state = useSelector(
    (s: RootState) => s.calculator
  );

  const [errors, setErrors] = useState<any>({});

  const fields = [
    { key: "annual_ctc", label: "Annual CTC" },
    { key: "basic_salary", label: "Basic Salary" },
    { key: "hra_received", label: "HRA Received (Yearly)" },
    { key: "rent_paid", label: "Rent Paid (Yearly)" },
  ];

  const handleContinue = () => {
    const validationErrors = validateSalary(state);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(nextStep());
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-6">
        Salary Details
      </h2>
      <ValidationBanner errors={errors} />
      {fields.map((field) => (
        <div key={field.key} className="mb-4">
          <label className="text-sm text-gray-600">
            {field.label}
          </label>

          <div className="mt-1 flex items-center border rounded-xl px-3">
            <span className="text-gray-500 mr-2">₹</span>

            <CurrencyInput
              value={
                state[field.key as keyof typeof state] as
                | number
                | ""
              }
              onChange={(val: number | "") =>
                dispatch(
                  updateField({
                    key: field.key as any,
                    value: val,
                  })
                )
              }
            />
          </div>

          {errors[field.key] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.key]}
            </p>
          )}
        </div>
      ))}

      <button
        onClick={handleContinue}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl w-full hover:bg-blue-700 transition"
      >
        Continue
      </button>
    </div>
  );
}
