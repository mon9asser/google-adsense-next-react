"use client"

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
        
    return (<ins className="adsbygoogle"{...props}></ins>);

}


export {AdSenseUnit}