import Script from "next/script";

export default function AdsComponent() {
  return (
    <div className="flex justify-center my-6">
      <div id="container-4ecd8c8c86601a5e94c38d057413dcd9"></div>
      <Script
        id="ads-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '4ecd8c8c86601a5e94c38d057413dcd9',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `,
        }}
      />
      <Script
        id="ads-invoke"
        strategy="afterInteractive"
        src="//www.highperformanceformat.com/4ecd8c8c86601a5e94c38d057413dcd9/invoke.js"
      />
    </div>
  );
}
