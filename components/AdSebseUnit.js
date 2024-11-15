"use client";

import { useEffect, useState, useRef } from "react";
var AdSenseUnit = function (props) {
    
  var [isClient, setIsClient] = useState(false);
  var insRef = useRef(null);

  useEffect(() => { 
    setIsClient(typeof window !== "undefined");
  }, []);
  
  /*
  useEffect(() => {
    if (isClient && window.adsbygoogle && insRef.current) {
      // Initialize adsbygoogle if available
     (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log("AdSense initialized this Ad unit ..");
      console.log(insRef.current);
      
      const insElement = insRef.current;
      const parent = insElement.parentNode;
      const index = Array.prototype.indexOf.call(parent.children, insElement);

      setTimeout(() => console.log(`Add NO# ${index + 1} Status: ${insRef.current.getAttribute('data-adsbygoogle-status')}` ), 500 );


    }
  }, [isClient]);
  */


  return (
   <>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4846779075023104"
     crossorigin="anonymous"></script>
    <ins ref={insRef} className="adsbygoogle" {...props}></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
   </>
  );
  
}


export default AdSenseUnit