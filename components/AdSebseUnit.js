"use client";


import { useEffect } from "react";

var AdSenseUnit = ({adsReady, ...props}) => {

    useEffect(() => {
        if (adsReady && typeof window !== "undefined" && window.adsbygoogle) {
          try {
            window.adsbygoogle.push({});

           //  (adsbygoogle = window.adsbygoogle || []).push({});
           //  window.adsbygoogle.push({});
          } catch (e) {
            console.error("AdSense error: ", e);
          }
        }
      }, [adsReady]);
        
    return (

        <>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4846779075023104"
                crossOrigin="anonymous"
            ></script>
            <ins className="adsbygoogle" {...props}></ins>
            <script>
                {(adsbygoogle = window.adsbygoogle || []).push({})}
            </script>
        </>
    );

}


export default AdSenseUnit