// src/components/AdSense.js
import Script from "next/script";

const AdSense = ({ pId, adsReady }) => {

var [adsRead, setAdsReady] = react.useState(false);

  react.useEffect(() => {
    setAdsReady(true);
  }, [])

  return (
    <Script
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      strategy="afterInteractive" // Ensures the script loads after page content
      onLoad={() =>console.log("AdSense script loaded globally")}
    />
  );
};

export default AdSense;
