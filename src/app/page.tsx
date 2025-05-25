import NumberConverter from "@/components/NumberConverter";
import FeatureIntro from "@/components/FeatureIntro";

export default function Home() {
  return (
    <>
      <main className="main-flex-ads min-h-screen bg-gray-100 py-10">
        {/* <div className="ad-slot ad-left">ads1</div> */}
        <div className="max-w-6xl w-full mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            Online Number to Words Converter
          </h1>
          <NumberConverter />
          {/*         <div className="my-8 flex justify-center">
          <div className="ad-slot bg-gray-200 rounded-lg flex items-center justify-center text-gray-500"
               style={{ width: '100%', maxWidth: 1400, height: 10 }}>
            AD
          </div>
        </div> */}
          <div className="h-8" /> <FeatureIntro />
        </div>
        {/* <div className="ad-slot ad-right">ads2</div> */}
      </main>
      <div className="h-8" />{" "}
      {/* Add vertical space between main content and footer */}
      <footer className="mt-10 py-6 bg-white border-t-2 border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          &copy; 2025 Free Number to Words Converter Tool -{" "}
          <a
            href="https://number2words.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Free Number to Words Converter Tool"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            number2words.org
          </a>
          . All rights reserved.
        </p>
      </footer>
    </>
  );
}
