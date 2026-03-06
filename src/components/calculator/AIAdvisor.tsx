interface Props {
  advisor: string[];
}

export default function AIAdvisor({ advisor }: Props) {
  return (
    <div className="mt-6 bg-indigo-50 border border-indigo-200 p-6 rounded-xl">

      <h3 className="font-semibold text-lg mb-3">
        AI Tax Advisor
      </h3>

      <ul className="list-disc ml-5 space-y-2">
        {advisor.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>

    </div>
  );
}
