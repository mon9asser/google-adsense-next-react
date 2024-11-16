"use client";
import { useEffect } from "react";

const GoogleAdSense = ({ adsReady, ...props}) => {
    useEffect(() => {
        if (adsReady) {
            (adsbygoogle = window.adsbygoogle || []).push({});
            // Your logic here
        }
    }, [adsReady]); // Dependency array ensures the effect runs when adsReady changes

    var {style, others} = props;
    if( style == undefined ) {
        style = {};
    }

    return <ins 
        className="adsbygoogle"
        style={{display:'block', width: '100%', height: 'auto', ...style}}      
        {...others}
    ></ins>;
};

export default GoogleAdSense;
