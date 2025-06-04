import NumberConverter from "@/components/NumberConverter";
import FeatureIntro from "@/components/FeatureIntro";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full border-s-gray-300 shadow z-50">
        <div className="w-full flex items-center justify-between px-4 h-16">
          {/* Left: Site name and navigation */}
          <Link
            href="/"
            className="text-xl font-bold hover:text-violet-700 transition-colors"
          >
            Home
          </Link>
          {/* Right: Logo */}
          <Image
            src="/logo.webp"
            alt="Site Logo"
            width={120}
            height={60}
            className="h-10 w-auto"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </nav>
      {/* Add pt-16 to main content to avoid being covered by navbar */}
      <main className="main-flex-ads min-h-screen bg-gray-100 py-10 pt-16">
        {/* <div className="ad-slot ad-left">ads1</div> */}
        <div className="ad-slot ad-left">
          {/* Inject the atOptions config */}
          <Script
            id="adsterra-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
        atOptions = {
          'key' : 'd7a55862ff822612fdaaed00913b6a9f',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };
      `,
            }}
          />
          {/* Load the Adsterra script */}
          <Script
            id="adsterra-script"
            strategy="afterInteractive"
            src="//www.highperformanceformat.com/d7a55862ff822612fdaaed00913b6a9f/invoke.js"
          />
        </div>
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
        {/* ads1 */}
        <div className="ad-slot ad-right">
          {/* Inject the atOptions config */}
          <Script
            id="adsterra-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
        atOptions = {
          'key' : 'd7a55862ff822612fdaaed00913b6a9f',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };
      `,
            }}
          />
          {/* Load the Adsterra script */}
          <Script
            id="adsterra-script"
            strategy="afterInteractive"
            src="//www.highperformanceformat.com/d7a55862ff822612fdaaed00913b6a9f/invoke.js"
          />
        </div>
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
