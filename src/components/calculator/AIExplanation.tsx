interface Props {
  recommended: "old" | "new";
  difference: number;
  oldTaxable: number;
  newTaxable: number;
}

export default function AIExplanation({
  recommended,
  difference,
  oldTaxable,
  newTaxable,
}: Props) {
  const regimeName =
    recommended === "old"
      ? "Old Tax Regime"
      : "New Tax Regime";

  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-blue-700 mb-3">
        Why This Regime Is Recommended
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Based on your salary structure and deductions,
        the{" "}
        <strong>{regimeName}</strong> results in a
        lower overall tax liability.
      </p>

      <p className="mt-3 text-gray-700">
        Your taxable income under the old regime is{" "}
        <strong>
          ₹{oldTaxable?.toLocaleString()}
        </strong>
        , while under the new regime it is{" "}
        <strong>
          ₹{newTaxable?.toLocaleString()}
        </strong>
        .
      </p>

      <p className="mt-3 text-gray-700">
        By choosing the{" "}
        <strong>{regimeName}</strong>, you save
        approximately{" "}
        <span className="text-green-600 font-semibold">
          ₹{difference?.toLocaleString()}
        </span>{" "}
        in taxes.
      </p>

      <p className="mt-3 text-sm text-gray-500">
        This recommendation is calculated using your
        declared deductions, investments, and salary
        components.
      </p>
    </div>
  );
}
