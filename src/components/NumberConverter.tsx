'use client'

import { useState } from 'react'
import { numberToWords } from '@/utils/numberToWords'

export default function NumberConverter() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleConvert = () => {
    if (!input || isNaN(Number(input))) {
      setResult('Please enter a valid number.')
      return
    }
    setResult(numberToWords(input))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
  }

  const handleClear = () => {
    setInput('')
    setResult('')
  }

  return (
    <div className="converter-container">
      <div className="mb-6">
        <label htmlFor="input-number" className="block text-sm font-semibold mb-2">
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

      <div className="text-center mb-6">
        <button
          onClick={handleConvert}
          className="convert-button"
        >
          Convert
        </button>
      </div>

      <div className="mb-6">
        <label htmlFor="words-output" className="block text-sm font-semibold mb-2">
          Words:
        </label>
        <div className="relative">
          <textarea
            id="words-output"
            value={result}
            readOnly
            className="result-area w-full"
          />
          <button
            onClick={handleCopy}
            className="copy-button absolute right-2 top-2"
          >
            Copy
          </button>
        </div>
      </div>

      <button
        onClick={handleClear}
        className="clear-button block mx-auto"
      >
        Clear
      </button>
    </div>
  )
}