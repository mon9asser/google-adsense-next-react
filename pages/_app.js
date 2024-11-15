// pages/_app.js
import { GoogleAdSense } from "nextjs-google-adsense";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  
  var publisher_id = 'ca-pub-4846779075023104';


  return (
    <>

<Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4846779075023104"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
     	 <Component {...pageProps} />
    </>
  );
};

export default App;
