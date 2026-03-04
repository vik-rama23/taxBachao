interface Props {
  recommended: "old" | "new";
  difference: number;
  oldTax: number;
  newTax: number;
}

export default function TaxSummaryCard({
  recommended,
  difference,
  oldTax,
  newTax,
}: Props) {
  const regime =
    recommended === "old"
      ? "Old Tax Regime"
      : "New Tax Regime";

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-semibold">
        Recommended: {regime}
      </h2>

      <p className="mt-2 text-lg">
        You can save
        <span className="font-bold ml-2">
          ₹{difference.toLocaleString()}
        </span>
      </p>

      <div className="grid grid-cols-2 gap-6 mt-6 text-center">

        <div className="bg-white/10 p-4 rounded-xl">
          <p className="text-sm opacity-80">
            Old Regime Tax
          </p>
          <p className="text-xl font-semibold">
            ₹{oldTax.toLocaleString()}
          </p>
        </div>

        <div className="bg-white/10 p-4 rounded-xl">
          <p className="text-sm opacity-80">
            New Regime Tax
          </p>
          <p className="text-xl font-semibold">
            ₹{newTax.toLocaleString()}
          </p>
        </div>

      </div>
    </div>
  );
}
