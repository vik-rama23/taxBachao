"use client";

interface Props {
  data: any;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ReviewExtractedData({
  data,
  onConfirm,
  onCancel
}: Props) {

  const fields = [
    { key: "annual_ctc", label: "Annual CTC" },
    { key: "basic_salary", label: "Basic Salary" },
    { key: "hra_received", label: "HRA Received" },
    { key: "rent_paid", label: "Rent Paid" },
    { key: "section_80c", label: "80C Investments" },
    { key: "realized_pnl", label: "Realized Stock P&L" }
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-6 w-[500px] shadow-xl">

        <h2 className="text-xl font-semibold mb-4">
          Review Extracted Data
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          We found the following values from your documents.
        </p>

        <div className="space-y-3">

          {fields.map(field => {

            if (!data[field.key]) return null;

            return (
              <div key={field.key} className="flex justify-between border-b pb-2">

                <span className="text-gray-600">
                  {field.label}
                </span>

                <span className="font-semibold">
                  ₹{data[field.key].toLocaleString()}
                </span>

              </div>
            );
          })}

        </div>

        <div className="flex gap-3 mt-6">

          <button
            onClick={onCancel}
            className="flex-1 border rounded-lg py-2"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 bg-blue-600 text-white rounded-lg py-2"
          >
            Confirm & Prefill
          </button>

        </div>

      </div>

    </div>
  );
}
