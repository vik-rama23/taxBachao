interface Suggestion {
  type: string;
  message: string;
  tax_saving: number;
}

interface Props {
  suggestions: Suggestion[];
}

export default function InvestmentOptimizer({
  suggestions,
}: Props) {
  if (!suggestions || suggestions.length === 0)
    return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">
        Investment Optimization
      </h3>

      <div className="space-y-4">
        {suggestions.map((s, i) => (
          <div
            key={i}
            className="border p-4 rounded-xl bg-green-50"
          >
            <p className="font-medium">{s.message}</p>

            <p className="text-green-700 mt-1">
              Potential Tax Saving ₹
              {s.tax_saving.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
