import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold">
        Smart Tax Planning Made Simple
      </h1>

      <p className="mt-4 text-gray-600">
        Compare Old vs New regime and optimize your tax.
      </p>

      <Link
        href="/calculator"
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Start Planning
      </Link>
    </div>
  );
}
