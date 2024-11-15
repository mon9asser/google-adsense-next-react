import react from "react";
import AdSense from "../components/AdSense"; 
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  
  const [adsReady, setAdsReady] = react.useState(false);

  react.useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      setAdsReady(true);
    }
  }, []);


  return (
    <>
      {/* Add AdSense script globally */} 
      <Script
        async
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4846779075023104`}
        strategy="afterInteractive" // Ensures the script loads after page content
        onLoad={() =>{
          console.log("AdSense script loaded globally");
          setAdsReady(true);
        }}
      />

      {/* Render page-specific components */}
      <Component {...pageProps}  adsReady={adsReady} />
    </>
  );
}

export default MyApp;
