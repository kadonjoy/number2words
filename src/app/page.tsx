import NumberConverter from "@/components/NumberConverter";
import FeatureIntro from "@/components/FeatureIntro";

export default function Home() {
  return (
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
        <FeatureIntro />
      </div>
      {/* <div className="ad-slot ad-right">ads2</div> */}
    </main>
  );
}
