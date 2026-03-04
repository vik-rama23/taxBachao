interface Props {
  errors: Record<string, string>;
}

export default function ValidationBanner({ errors }: Props) {
  const messages = Object.values(errors);

  if (messages.length === 0) return null;

  return (
    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
      <p className="font-semibold mb-2">
        Please fix the following issues:
      </p>

      <ul className="list-disc ml-5 text-sm space-y-1">
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
