import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app/globals.css'; // Optional: Include your custom global styles
import Script from 'next/script';
import conf from '../components/conf';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
    
    var [adsReady, setAdsReady] = useState(false);

     
    return (
        <>
            <Script 
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${conf.account}`}
                crossOrigin='anonymous'
                strategy='afterInteractive'
                onLoad={e => {
                    setAdsReady(true);
                    console.log('Adsense is loaded successfully')
                }}
            />

            <Component {...pageProps} adsReady={adsReady} />
        </>
    );
}