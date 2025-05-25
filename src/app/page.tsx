import NumberConverter from '@/components/NumberConverter'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Number to Words Converter
        </h1>
        <NumberConverter />
        
        <div className="mt-10 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Why Use Our Number to Words Converter?</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">1. Real-Time Conversion</h3>
              <p>The converter updates results instantly as you type</p>
            </div>
            <div>
              <h3 className="font-bold">2. Accurate Results</h3>
              <p>Get precise English word representations of numbers</p>
            </div>
            <div>
              <h3 className="font-bold">3. Easy to Use</h3>
              <p>Simple interface for quick conversions</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}