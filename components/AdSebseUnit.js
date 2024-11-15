"use client"

import { useEffect, useState, useRef } from "react";
var AdSenseUnit = function (props) {
    
  var [isClient, setIsClient] = useState(false);
  var insRef = useRef(null);

  useEffect(() => { 
    setIsClient(typeof window !== "undefined");
  }, []);

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


  return (
    <ins ref={insRef} className="adsbygoogle" {...props}></ins>
  );
  
}


export default AdSenseUnit