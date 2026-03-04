"use client";

import { useEffect, useState } from "react";
import { formatINR, parseINR } from "../../app/lib/formatCurrency";

interface Props {
  value: number | "";
  onChange: (value: number | "") => void;
  placeholder?: string;
}

export default function CurrencyInput({
  value,
  onChange,
  placeholder = "Enter amount",
}: Props) {
  const [displayValue, setDisplayValue] =
    useState<string>("");

  useEffect(() => {
    if (value === "") {
      setDisplayValue("");
    } else {
      setDisplayValue(formatINR(value));
    }
  }, [value]);

  return (
    <input
      type="text"
      value={displayValue}
      placeholder={placeholder}
      onChange={(e) => {
        const parsed = parseINR(e.target.value);
        setDisplayValue(e.target.value);
        onChange(parsed);
      }}
      onBlur={() => {
        if (value !== "") {
          setDisplayValue(formatINR(value));
        }
      }}
      className="w-full py-3 outline-none"
    />
  );
}
