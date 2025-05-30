"use client";

import { useState } from "react";
import { numberToWords } from "@/utils/numberToWords";

function formatResult(text: string, mode: string) {
  if (mode === "upper") return text.toUpperCase();
  if (mode === "lower") return text.toLowerCase();
  if (mode === "capitalize") {
    return text.replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return text;
}

export default function NumberConverter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [caseMode, setCaseMode] = useState("normal");

  const handleConvert = () => {
    if (!input || isNaN(Number(input))) {
      setResult("Please enter a valid number.");
      return;
    }
    setResult(numberToWords(input));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatResult(result, caseMode));
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="converter-container">
      <div className="input-group">
        <label
          htmlFor="input-number"
          className="block text-sm font-semibold mb-2"
        >
          Enter Number:
        </label>
        <input
          type="text"
          id="input-number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full"
          placeholder="Enter number"
        />
      </div>

      <div className="convert-button-container">
        <button onClick={handleConvert} className="convert-button">
          Convert
        </button>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="case-mode" className="text-sm font-semibold">
          Output Case:
        </label>
        <select
          id="case-mode"
          value={caseMode}
          onChange={(e) => setCaseMode(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {/* <option value="capitalize">Capitalize Each Word</option> */}
          <option value="normal">Normal</option>
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="words-output"
          className="block text-sm font-semibold mb-2"
        >
          Output Words:
        </label>
        <div className="relative">
          <textarea
            id="words-output"
            value={formatResult(result, caseMode)}
            readOnly
            className="result-area w-full"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <button onClick={handleClear} className="clear-button flex-1">
          Clear
        </button>
        <button onClick={handleCopy} className="copy-button flex-1">
          Copy
        </button>
      </div>
    </div>
  );
}
