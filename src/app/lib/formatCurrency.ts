export function formatINR(value: number | ""): string {
  if (value === "" || isNaN(Number(value))) return "";

  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Number(value));
}

export function parseINR(value: string): number | "" {
  if (!value) return "";

  const numeric = Number(value.replace(/,/g, ""));

  return isNaN(numeric) ? "" : numeric;
}
