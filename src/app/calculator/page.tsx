"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

import Stepper from "@/components/calculator/Stepper";
import SalaryForm from "@/components/calculator/SalaryForm";
import InvestmentForm from "@/components/calculator/InvestmentForm";
import ResultsView from "@/components/calculator/ResultsView";

import AnimatedStep from "@/components/common/AnimatedStep";

export default function CalculatorPage() {
  const step = useSelector(
    (s: RootState) => s.calculator.step
  );

  return (
    <div className="max-w-3xl mx-auto py-10">

      <Stepper />

      {step === 1 && (
        <AnimatedStep>
          <SalaryForm />
        </AnimatedStep>
      )}

      {step === 2 && (
        <AnimatedStep>
          <InvestmentForm />
        </AnimatedStep>
      )}

      {step === 3 && (
        <AnimatedStep>
          <ResultsView />
        </AnimatedStep>
      )}

    </div>
  );
}
