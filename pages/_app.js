import react from "react";
import AdSense from "../components/AdSense"; 
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    
  return (
    <>
      
      <Script
        async
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4846779075023104`}
        strategy="afterInteractive" // Ensures the script loads after page content
        onLoad={e => console.log('Script of Google Adsense is Loaded!!')}
      />

      {/* Render page-specific components */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
