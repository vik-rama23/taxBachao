"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import {
  updateField,
  nextStep,
  prevStep,
} from "../../app/store/calculatorSlice";
import { validateInvestment } from "../../app/lib/validation";
import { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import ValidationBanner from "../common/ValidationBanner";

export default function InvestmentForm() {
  const dispatch = useDispatch();
  const state = useSelector((s: RootState) => s.calculator);
  const [errors, setErrors] = useState<any>({});

  const fields = [
    { key: "section_80c", label: "Section 80C" },
    { key: "nps_80ccd1b", label: "NPS (80CCD 1B)" },
    { key: "nps_employer_80ccd2", label: "Employer NPS" },
    { key: "home_loan_interest", label: "Home Loan Interest" },
    { key: "health_insurance", label: "Health Insurance" },
    { key: "mobile_reimbursement", label: "Mobile Reimbursement" },
    { key: "internet_reimbursement", label: "Internet Reimbursement" },
    { key: "meal_coupons", label: "Meal Coupons" },
  ];

  const handleCalculate = () => {
    const validationErrors = validateInvestment(state);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(nextStep());
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-6">
        Investments & Deductions
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

      <div className="flex justify-between mt-6">
        <button
          onClick={() => dispatch(prevStep())}
          className="px-6 py-3 border rounded-xl"
        >
          Back
        </button>

        <button
          onClick={handleCalculate}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
