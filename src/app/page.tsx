import NumberConverter from "@/components/NumberConverter";
import FeatureIntro from "@/components/FeatureIntro";
import Footer from "@/components/Footer";
import AdsComponent from "@/components/AdsComponent";
import NavAdsComponent from "@/components/NavAdsComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Add pt-16 to main content to avoid being covered by navbar */}

      <main className="main-flex-ads min-h-screen bg-gray-100 py-10 pt-16 lg:pl-44 lg:pr-44">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Online Number to Words Converter
          </h1>
          <AdsComponent />

          <NumberConverter />
          <NavAdsComponent />
          <div className="h-8" />
          <FeatureIntro />
        </div>
      </main>
      <div className="h-8" />
      {/* Add vertical space between main content and footer */}
      <Footer />
    </>
  );
}
